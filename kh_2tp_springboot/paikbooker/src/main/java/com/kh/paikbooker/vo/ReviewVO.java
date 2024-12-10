package com.kh.paikbooker.vo;

import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@AllArgsConstructor // 매개변수가 전부 다 있는 생성자
@NoArgsConstructor // 매개변수가 없는 생성자 (기본 생성자)
@ToString

public class ReviewVO {

    private int rvNo;
    private Date rvDate;
    private int rNo;
    private String rTime;
    private Date rSubmitTime;
    private String userId;
    private String storeName;
    private BigDecimal rvPrice;
    private BigDecimal rvTaste;
    private BigDecimal rvVibe;
    private BigDecimal rvKind;
    private BigDecimal rvAverage; // 리뷰 평점

}
