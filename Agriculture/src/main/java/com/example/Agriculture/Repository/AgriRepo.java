package com.example.Agriculture.Repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.PagingAndSortingRepository;

import com.example.Agriculture.Entity.Agriculture;

public interface AgriRepo extends CrudRepository<Agriculture,Integer>,PagingAndSortingRepository<Agriculture, Integer>{


}
