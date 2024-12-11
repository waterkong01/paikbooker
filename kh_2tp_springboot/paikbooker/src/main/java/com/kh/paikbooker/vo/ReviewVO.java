package com.kh.paikbooker.vo;

import lombok.*;

import java.math.BigDecimal;
import java.util.Date;

/*@Getter
@Setter*/
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
    private String rvContent;

    public int getRvNo() {
        return rvNo;
    }

    public void setRvNo(int rvNo) {
        this.rvNo = rvNo;
    }

    public Date getRvDate() {
        return rvDate;
    }

    public void setRvDate(Date rvDate) {
        this.rvDate = rvDate;
    }

    public int getrNo() {
        return rNo;
    }

    public void setrNo(int rNo) {
        this.rNo = rNo;
    }

    public String getrTime() {
        return rTime;
    }

    public void setrTime(String rTime) {
        this.rTime = rTime;
    }

    public Date getrSubmitTime() {
        return rSubmitTime;
    }

    public void setrSubmitTime(Date rSubmitTime) {
        this.rSubmitTime = rSubmitTime;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public BigDecimal getRvPrice() {
        return rvPrice;
    }

    public void setRvPrice(BigDecimal rvPrice) {
        this.rvPrice = rvPrice;
    }

    public BigDecimal getRvTaste() {
        return rvTaste;
    }

    public void setRvTaste(BigDecimal rvTaste) {
        this.rvTaste = rvTaste;
    }

    public BigDecimal getRvVibe() {
        return rvVibe;
    }

    public void setRvVibe(BigDecimal rvVibe) {
        this.rvVibe = rvVibe;
    }

    public BigDecimal getRvKind() {
        return rvKind;
    }

    public void setRvKind(BigDecimal rvKind) {
        this.rvKind = rvKind;
    }

    public String getRvContent() {
        return rvContent;
    }

    public void setRvContent(String rvContent) {
        this.rvContent = rvContent;
    }
}
