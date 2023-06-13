package com.example.Agriculture.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Agriculture.Entity.Signup;
import com.example.Agriculture.Repository.SignupRepo;

@Service
public class LoginService {
	@Autowired
	SignupRepo lr;
    public Iterable<Signup> getloginDetails()
    {
  	    return lr.findAll();
    }
	
	

}
