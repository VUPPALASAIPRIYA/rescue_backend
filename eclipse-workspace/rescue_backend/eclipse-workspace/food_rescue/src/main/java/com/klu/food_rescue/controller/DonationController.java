package com.klu.food_rescue.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.klu.food_rescue.entity.Donation;
import com.klu.food_rescue.repository.DonationRepository;

@RestController
@RequestMapping("/api/donations")
@CrossOrigin
public class DonationController {
    @Autowired
    private DonationRepository donationRepository;

    @PostMapping
    public Donation addDonation(@RequestBody Donation donation) {
        return donationRepository.save(donation);
    }

    @GetMapping
    public List<Donation> getAllDonations() {
        return donationRepository.findAll();
    }

    @PutMapping("/{id}")
    public Donation updateDonationStatus(@PathVariable Long id, @RequestBody Donation updatedDonation) {
        Optional<Donation> optionalDonation = donationRepository.findById(id);
        if (optionalDonation.isPresent()) {
            Donation donation = optionalDonation.get();
            donation.setStatus(updatedDonation.getStatus());
            return donationRepository.save(donation);
        } else {
            throw new RuntimeException("Donation not found");
        }
    }

    // New endpoint to fetch approved donations
    @GetMapping("/approved")
    public List<Donation> getApprovedDonations() {
        return donationRepository.findByStatus("Approved");
    }
    
    
}
