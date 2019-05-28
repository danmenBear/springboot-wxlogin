package com.mike.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.alibaba.fastjson.JSONObject;
import com.mike.common.IMoocJSONResult;
import com.mike.common.RedisOperator;

@RestController
public class MineController {

	@Autowired
	private RedisOperator redis;
	

	@GetMapping("/message")
	public JSONObject wxLogin(String code) {
		JSONObject result = new JSONObject();
		System.out.println("hhaa");
		result.put("user_name", "小明");
		result.put("distributor", "合作商");
		result.put("mine_image", "http://navijapan-jp.oss-ap-northeast-1.aliyuncs.com/attached/userIcon/20190320/2ceba5cd-56ac-4390-b6a6-4c33ea462a80.jpg?Expires=4706664925&OSSAccessKeyId=LTAIByJfDQOWt6oE&Signature=WKipdOCH5TMWAHbsd43/ihCqaBI%3D");
		result.put("order", "小明的订单");
		return result;
	}
}
