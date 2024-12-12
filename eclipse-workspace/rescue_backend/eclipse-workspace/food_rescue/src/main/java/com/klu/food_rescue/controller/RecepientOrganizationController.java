package com.klu.food_rescue.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.klu.food_rescue.entity.RecepientOrganization;
import com.klu.food_rescue.repository.RecepientOrganizationRepository;

@RestController
@RequestMapping("/api/organizations")
@CrossOrigin(origins = "http://localhost:3000")
public class RecepientOrganizationController {
    @Autowired
    private RecepientOrganizationRepository organizationRepository;

    @GetMapping
    public List<RecepientOrganization> getAllOrganizations() {
        return organizationRepository.findAll();
    }

    @PostMapping
    public ResponseEntity<String> registerOrganization(@RequestBody RecepientOrganization organization) {
        if (organization.getName() == null || organization.getName().isEmpty()) {
            return ResponseEntity.badRequest().body("Organization name is required");
        }
        organizationRepository.save(organization);
        return ResponseEntity.ok("Organization registered successfully");
    }
}
