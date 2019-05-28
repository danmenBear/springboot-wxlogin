package com.mike.pojo;

public class Commodity {

    private String clothesOne;

    private String title;

    private String explainWord;

    private String money_word;

    private String shopCar;

    public Commodity(String clothesOne, String title, String explainWord, String money_word, String shopCar) {
        this.clothesOne = clothesOne;
        this.title = title;
        this.explainWord = explainWord;
        this.money_word = money_word;
        this.shopCar = shopCar;
    }

    public String getClothesOne() {
        return clothesOne;
    }

    public void setClothesOne(String clothesOne) {
        this.clothesOne = clothesOne;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getExplainWord() {
        return explainWord;
    }

    public void setExplainWord(String explainWord) {
        this.explainWord = explainWord;
    }

    public String getMoney_word() {
        return money_word;
    }

    public void setMoney_word(String money_word) {
        this.money_word = money_word;
    }

    public String getShopCar() {
        return shopCar;
    }

    public void setShopCar(String shopCar) {
        this.shopCar = shopCar;
    }
}
