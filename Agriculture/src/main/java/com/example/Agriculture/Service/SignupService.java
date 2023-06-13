package com.example.Agriculture.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;

import com.example.Agriculture.Entity.Signup;
import com.example.Agriculture.Repository.SignupRepo;

@Service
@RequestMapping("/signup")
public class SignupService {
	@Autowired
	SignupRepo sr;
	public void savesignupData(Signup ee)
	{
		sr.save(ee);
	}
	
	public Signup FindByUsername(String username)
	{
		return sr.FindByUsername(username);
	}
}

