package com.kh.springpractice01.VO;

import java.util.Date;

public class ReservationVO {

    private int rNo;
    private String userId;
    private String userName;
    private int storeNo;
    private String storeName;
    private String storePhone;
    private int rPersonCnt;
    private Date rTime;
    private Date rSubmitTime;
    private String brandName;

    public ReservationVO() {
    }

    public int getRNo() {
        return rNo;
    }

    public void setRNo(int rNo) {
        this.rNo = rNo;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public int getStoreNo() {
        return storeNo;
    }

    public void setStoreNo(int storeNo) {
        this.storeNo = storeNo;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public String getStorePhone() {
        return storePhone;
    }

    public void setStorePhone(String storePhone) {
        this.storePhone = storePhone;
    }

    public int getRPersonCnt() {
        return rPersonCnt;
    }

    public void setRPersonCnt(int rPersonCnt) {
        this.rPersonCnt = rPersonCnt;
    }

    public Date getRTime() {
        return rTime;
    }

    public void setRTime(Date rTime) {
        this.rTime = rTime;
    }

    public Date getRSubmitTime() {
        return rSubmitTime;
    }

    public void setRSubmitTime(Date rSubmitTime) {
        this.rSubmitTime = rSubmitTime;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

}
