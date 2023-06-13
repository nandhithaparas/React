package com.example.Agriculture.Repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.example.Agriculture.Entity.Agriculture;

@Repository
public interface LoginRepo extends CrudRepository<Agriculture, Integer> {

}
