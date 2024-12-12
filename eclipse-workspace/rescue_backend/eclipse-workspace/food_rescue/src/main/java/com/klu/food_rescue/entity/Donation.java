package com.klu.food_rescue.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import java.time.LocalDate;

@Entity
public class Donation {	
	@Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String itemType;
    private double quantity;
    private LocalDate pickupDate;
    private String recipientOrganization;
    private String status = "Pending";
	public Long getId() {
		return id;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getItemType() {
		return itemType;
	}
	public void setItemType(String itemType) {
		this.itemType = itemType;
	}
	public double getQuantity() {
		return quantity;
	}
	public void setQuantity(double quantity) {
		this.quantity = quantity;
	}
	public LocalDate getPickupDate() {
		return pickupDate;
	}
	public void setPickupDate(LocalDate pickupDate) {
		this.pickupDate = pickupDate;
	}
	public String getRecipientOrganization() {
		return recipientOrganization;
	}
	public void setRecipientOrganization(String recipientOrganization) {
		this.recipientOrganization = recipientOrganization;
	}
    
    
    
    
    
}
