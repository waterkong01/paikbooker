package com.kh.springpractice01.VO;

import java.util.Date;

public class StoreVO {

    private int storeNo;
    private String brandName;
    private String storeName;
    private Date storeOpen;
    private Date storeClose;
    private String storeAddr;
    private String storeMap;
    private String storePhone;

    public StoreVO() {
    }

    public int getStoreNo() {
        return storeNo;
    }

    public void setStoreNo(int storeNo) {
        this.storeNo = storeNo;
    }

    public String getBrandName() {
        return brandName;
    }

    public void setBrandName(String brandName) {
        this.brandName = brandName;
    }

    public String getStoreName() {
        return storeName;
    }

    public void setStoreName(String storeName) {
        this.storeName = storeName;
    }

    public Date getStoreOpen() {
        return storeOpen;
    }

    public void setStoreOpen(Date storeOpen) {
        this.storeOpen = storeOpen;
    }

    public Date getStoreClose() {
        return storeClose;
    }

    public void setStoreClose(Date storeClose) {
        this.storeClose = storeClose;
    }

    public String getStoreAddr() {
        return storeAddr;
    }

    public void setStoreAddr(String storeAddr) {
        this.storeAddr = storeAddr;
    }

    public String getStoreMap() {
        return storeMap;
    }

    public void setStoreMap(String storeMap) {
        this.storeMap = storeMap;
    }

    public String getStorePhone() {
        return storePhone;
    }

    public void setStorePhone(String storePhone) {
        this.storePhone = storePhone;
    }

}
