package com.example.Agriculture.Repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import com.example.Agriculture.Entity.Signup;

public interface SignupRepo extends CrudRepository<Signup,String>{
	
	@Query("Select s from Signup s where username=?1")
	Signup FindByUsername(String username);

}
