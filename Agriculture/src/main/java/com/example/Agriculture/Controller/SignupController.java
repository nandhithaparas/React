package com.example.Agriculture.Controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.Agriculture.Entity.Signup;
import com.example.Agriculture.Service.SignupService;

@RestController
@CrossOrigin
@RequestMapping("/signup")
public class SignupController {
	@Autowired
	SignupService ss;
	@PostMapping("/postsign")
	public String savedata(@RequestBody Signup ee)
	{
		ss.savesignupData(ee);
		return "New signup Added";
	}
	
	@GetMapping("/getUser/{username}")
	public Signup GetByUsername(@PathVariable("username") String username)
	{
		return ss.FindByUsername(username);
	}

}
