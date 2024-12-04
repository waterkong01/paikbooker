package com.kh.paikbooker.vo;

import lombok.*;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor // 매개변수가 전부 다 있는 생성자
@NoArgsConstructor // 매개변수가 없는 생성자 (기본 생성자)
@ToString

public class BrandVO {

    private int brandNo;
    private String brandName;
    private Date brandOpen;
    private Date brandClose;
    private String brandFood;

}
