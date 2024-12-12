package com.klu.food_rescue.controller;

import com.klu.food_rescue.entity.User;
import com.klu.food_rescue.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody User loginUser) {
        // Validate user inputs (email and password)
        if (loginUser.getEmail() == null || loginUser.getPassword() == null) {
            return ResponseEntity.badRequest().body("Email and Password are required.");
        }

        // Check if the user exists in the database
        User user = userRepository.findByEmail(loginUser.getEmail());
        if (user == null || !user.getPassword().equals(loginUser.getPassword())) {
            return ResponseEntity.status(401).body("Invalid email or password.");
        }

        // Respond with the user data if authentication is successful
        return ResponseEntity.ok(user);
    }
}
