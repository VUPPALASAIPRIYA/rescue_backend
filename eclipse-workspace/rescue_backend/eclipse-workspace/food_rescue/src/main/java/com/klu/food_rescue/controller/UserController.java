package com.klu.food_rescue.controller;

import com.klu.food_rescue.entity.User;
import com.klu.food_rescue.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping
    public ResponseEntity<String> registerUser(@RequestBody User user) {
        if (userRepository.existsByEmail(user.getEmail())) {
            return ResponseEntity.badRequest().body("Email is already in use.");
        }
        userRepository.save(user);
        return ResponseEntity.ok("User registered successfully.");
    }
}
