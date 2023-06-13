package com.example.Agriculture.Entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity

@Table(name="otherdetails")
@Transactional
public class OtherDetails {
	public OtherDetails(int id, int monthstogrow, String place) {
		super();
		this.id = id;
		this.monthstogrow = monthstogrow;
		this.place = place;
	}
	
	public OtherDetails()
	{
		
	}
	
	@Column(name="add_id")
	@Id
	private int id;
	private int monthstogrow;
	private String place;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public int getMonthstogrow() {
		return monthstogrow;
	}
	public void setMonthstogrow(int monthstogrow) {
		this.monthstogrow = monthstogrow;
	}
	public String getPlace() {
		return place;
	}
	public void setPlace(String place) {
		this.place = place;
	}

}
