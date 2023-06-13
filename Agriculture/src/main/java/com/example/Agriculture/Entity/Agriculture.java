 	package com.example.Agriculture.Entity;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import jakarta.transaction.Transactional;

@Entity
@Transactional
@Table(name="AgriInfo")
public class Agriculture {
	@Id

	private int id;
	private String cropname;
	private String botanicalname;
	private String soil;
	private String season;
	private String variety;
	private String fertilizer;
	public Agriculture(int id, String cropname, String botanicalname, String soil, String season, String variety,
			String fertilizer) {
		super();
		this.id = id;
		this.cropname = cropname;
		this.botanicalname = botanicalname;
		this.soil = soil;
		this.season = season;
		this.variety = variety;
		this.fertilizer = fertilizer;
	}
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getFertilizer() {
		return fertilizer;
	}
	public void setFertilizer(String fertilizer) {
		this.fertilizer = fertilizer;
	}
	public String getCropname() {
		return cropname;
	}
	public void setCropname(String cropname) {
		this.cropname = cropname;
	}
	public String getBotanicalname() {
		return botanicalname;
	}
	public void setBotanicalname(String botanicalname) {
		this.botanicalname = botanicalname;
	}
	public String getSoil() {
		return soil;
	}
	public void setSoil(String soil) {
		this.soil = soil;
	}
	public String getSeason() {
		return season;
	}
	public void setSeason(String season) {
		this.season = season;
	}
	public String getVariety() {
		return variety;
	}
	public void setVariety(String variety) {
		this.variety = variety;
	}
	public Agriculture()
	{
		
	}
//	@OneToMany(cascade =CascadeType.ALL)
//	@JoinColumn(name="id",referencedColumnName="id")
//	private List<OtherDetails> otherdetail;
//
//
//	public List<OtherDetails> getOtherDetails() {
//		return otherdetail;
//	}
//
//
//	public void setOtherDetails(List<OtherDetails> otherdetail) {
//		this.otherdetail = otherdetail;
//	}
	@OneToOne(cascade =CascadeType.ALL)
	@JoinColumn(name="fk_add_id")
	private OtherDetails otherdetails;
	public OtherDetails getOtherdetails() {
		return otherdetails;
	}
	public void setOtherdetails(OtherDetails otherdetails) {
		this.otherdetails = otherdetails;
	}

}
