package com.mike.controller;

import com.alibaba.fastjson.JSON;
import com.alibaba.fastjson.JSONArray;
import com.alibaba.fastjson.JSONObject;
import com.mike.pojo.Commodity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class CommodityController {

    @GetMapping("/commodity")
    public JSONArray wxLogin(String code) {

        List<Commodity> list = getData();



        JSONArray jsonResult= JSONArray.parseArray(JSON.toJSONString(list));



        return  jsonResult;
    }


    private List<Commodity> getData(){
        List<Commodity> data = new ArrayList<>();

        data.add(new Commodity("../image/clothes_one.png", "户外装备外套", "Jackwolf狼爪 专业户外", "￥&nbsp;999.00" , "../image/shop_car.png"));
        data.add(new Commodity("../image/clothes_two.png", "一个商品", "J商品 专业户外", "￥&nbsp;500.00" , "../image/shop_car.png"));

        return data;
    }

}
