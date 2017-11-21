package com.foundation.spring;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Scanner;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AddController {
	
	@RequestMapping("/add.htm")
	public ModelAndView add(HttpServletRequest request, HttpServletResponse response){
		int i = Integer.parseInt(request.getParameter("t1"));
		int j = Integer.parseInt(request.getParameter("t2"));
		int k = i+j;
		ModelAndView mv = new ModelAndView();
		mv.addObject("result",k);
		mv.setViewName("display.jsp");
		return mv;
	}
	
	@RequestMapping(value ="/register.htm", method=RequestMethod.POST)
	public void register(HttpServletRequest request, HttpServletResponse response){
		System.out.println((request.getParameter("username")));
		
	}
	
	@RequestMapping(value="/login.htm", method=RequestMethod.POST)
	public void login(HttpServletRequest request, HttpServletResponse response){
		
		HttpSession session = request.getSession();
		Scanner s = null;
        try {
            s = new Scanner(request.getInputStream(), "UTF-8");
        } catch (IOException e) {
            e.printStackTrace();
        }
        StringBuilder sb = new StringBuilder();
        while(s.hasNext()){
        	sb.append(s.next());
        }
        JSONParser parser = new JSONParser();
        JSONObject data;
        String username = "";
        String password = "";
		try {
			data = (JSONObject)parser.parse(sb.toString()); 
	        username = data.get("name").toString();
	        password = data.get("password").toString();
		} catch (ParseException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}
        
		if(username.equals("Rajat")&& 
				password.equals("Ruchi")){
			session.setAttribute("flag", "Rajat");
		}
		response.setContentType("application/json");
		try {
			String jsonObj = "{result: 'true', flag: 'Rajat'}";
			PrintWriter writer = response.getWriter();
			writer.print(jsonObj);
			writer.flush();
			writer.close();	
			
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
