package com.example.Agriculture.Service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.Agriculture.Entity.Agriculture;
import com.example.Agriculture.Repository.AgriRepo;

@Service

public class AgriService {
	@Autowired
	AgriRepo ar;
	public void save(Agriculture aa)
	{
		ar.save(aa);
	}
	public Iterable<Agriculture> get()

	{
		return ar.findAll();
	}
	public Iterable<Agriculture> sort(String field)
	{
		return ar.findAll(Sort.by(Direction.DESC, field));
	}
	
	public Agriculture updatevalue(Agriculture aa)
	{
		return ar.save(aa);
		//return null;
	}
	
	public Page<Agriculture>pagingandsorting(int pagenum,int pagesize,String field)
	{
		Pageable paging=PageRequest.of(pagenum, pagesize).withSort(Sort.by(Direction.DESC,field));
		return ar.findAll(paging);
	}
	public void deleteid(int id)
	{
		ar.deleteById(id);
	}
	public Object getbyid(int id) {
		
		return ar.findById(id);
	}
	
   
}
