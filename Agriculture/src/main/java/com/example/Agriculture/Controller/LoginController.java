package com.example.Agriculture.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Agriculture.Entity.Signup;
import com.example.Agriculture.Service.LoginService;

@RestController
@CrossOrigin
@RequestMapping("/login")
public class LoginController {
	@Autowired
	LoginService ls;
	 @GetMapping("/getlogin")
   public Iterable<Signup> getloginData()
   {
	   return ls.getloginDetails();
   }

}
