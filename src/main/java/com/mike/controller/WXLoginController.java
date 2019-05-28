package com.mike.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import com.mike.common.HttpClientUtil;
import com.mike.common.IMoocJSONResult;
import com.mike.common.JsonUtils;
import com.mike.common.RedisOperator;
import com.mike.model.WXSessionModel;


@RestController
public class WXLoginController {
	
	@Autowired
	private RedisOperator redis;


	@GetMapping("/")
	public String index(){
		return "index";
	}

	@PostMapping("/wxLogin")
	public IMoocJSONResult wxLogin(String code) {
		
		System.out.println("wxlogin - code: " + code);
		
//		https://api.weixin.qq.com/sns/jscode2session?
//				appid=APPID&
//				secret=SECRET&
//				js_code=JSCODE&
//				grant_type=authorization_code
		
		String url = "https://api.weixin.qq.com/sns/jscode2session";
		Map<String, String> param = new HashMap<>();
		param.put("appid", "wx5139dc2e0cfdafd2");
		param.put("secret", "8656ff78f8da14dedf0bdeaa1e6aec8a");
		param.put("js_code", code);
		param.put("grant_type", "authorization_code");
		
		String wxResult = HttpClientUtil.doGet(url, param);
		System.out.println(wxResult);
		
		WXSessionModel model = JsonUtils.jsonToPojo(wxResult, WXSessionModel.class);
		
		// 存入session到redis
		redis.set("user-redis-session:" + model.getOpenid(), 
							model.getSession_key(), 
							1000 * 60 * 30);
		
//		redis.set("user-redis-session", 
//				model.getSession_key(), 
//				1000 * 60 * 30);
		
		return IMoocJSONResult.ok();
	}
	
}
