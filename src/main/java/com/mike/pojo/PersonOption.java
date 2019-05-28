package com.mike.pojo;

public class PersonOption {

    //用户名
    private String userName;

    //经销商
    private String distributor;

    //头像图片地址
    private String mineImage;

    //订单
    private String order;

    public PersonOption(String userName, String distributor, String mineImage, String order) {
        this.userName = userName;
        this.distributor = distributor;
        this.mineImage = mineImage;
        this.order = order;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getDistributor() {
        return distributor;
    }

    public void setDistributor(String distributor) {
        this.distributor = distributor;
    }

    public String getMineImage() {
        return mineImage;
    }

    public void setMineImage(String mineImage) {
        this.mineImage = mineImage;
    }

    public String getOrder() {
        return order;
    }

    public void setOrder(String order) {
        this.order = order;
    }
}
