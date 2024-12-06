package com.kh.paikbooker.vo;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor // 매개변수가 전부 다 있는 생성자
@NoArgsConstructor // 매개변수가 없는 생성자 (기본 생성자)
@ToString

public class ReservationVO {

    private int rNo;
    private String rTime;
    private int rPersonCnt;
    private Date rSubmitTime;
    private String userId;
    private String userName;
    private int storeNo;
    private String storeName;
    private String storePhone;
    private String brandName;

}
