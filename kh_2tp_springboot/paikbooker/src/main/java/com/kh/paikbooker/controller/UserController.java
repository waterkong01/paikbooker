package com.kh.paikbooker.controller;

import com.kh.miniProject.dao.MemberDao;
import com.kh.miniProject.vo.MemberVo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

import java.util.List;
import java.util.Map;

@RestController
@Slf4j
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {
    private final MemberDao memberDao;


//    @GetMapping("/getMemberInfo/{user_id}")
//    public ResponseEntity<MemberVo> getMemberInfo(@PathVariable String user_id) {
//        MemberVo member = memberDao.getMemberInfo(user_id);
//        if (member == null) {
//            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
//        }
//        return ResponseEntity.ok(member);
//    }

    // 회원 정보 조회
    @GetMapping("/getMemberInfo/{userId}")
    public ResponseEntity<MemberVo> getMemberInfo(@PathVariable("userId") String userId) {
        try {
            MemberVo member = memberDao.getMemberInfo(userId);
            if (member != null) {
                return ResponseEntity.ok(member);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
            }
        } catch (Exception e) {
            log.error("회원 정보 조회 중 에러 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(null);
        }
    }


    // 회원 정보 수정
    @PatchMapping("/{user_id}")
    public ResponseEntity<String> updateMember(@PathVariable("user_id") String user_id,
                                               @RequestBody Map<String, Object> updatedFields) {
        try {
            boolean isUpdated = memberDao.updateMember(user_id, updatedFields);
            if (isUpdated) {
                return ResponseEntity.ok("회원 정보가 성공적으로 수정되었습니다.");
            } else {
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                        .body("회원 정보 수정에 실패했습니다.");
            }
        } catch (Exception e) {
            log.error("회원 정보 수정 중 에러 발생", e);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                    .body("서버 에러: 회원 정보를 수정할 수 없습니다.");
        }
    }


    // 회원 삭제
    @DeleteMapping("/{user_id}")
    public ResponseEntity<Boolean> deleteMember(@PathVariable String user_id) {
        boolean isSuccess = memberDao.deleteMember(user_id);
        return ResponseEntity.ok(isSuccess);
    }



//    // 로그인한 회원 정보 조회
//    @GetMapping("/logged-in")
//    public ResponseEntity<MemberVo> getLoggedInMember(@RequestParam String user_id) {
//        MemberVo member = memberDao.findLoggedInMember(user_id);
//        if (member != null) {
//            return ResponseEntity.ok(member);
//        } else {
//            return ResponseEntity.status(404).build();
//        }
//    }

//


}
