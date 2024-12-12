package com.klu.food_rescue.dto;

import java.security.SecureRandom;
import java.util.Base64;

public class SecretKeyGenrator {
    public static void main(String[] args) {
        SecureRandom secureRandom = new SecureRandom();
        byte[] keyBytes = new byte[32]; // 256 bits (recommended for HS256 algorithm)
        secureRandom.nextBytes(keyBytes);
        String secretKey = Base64.getEncoder().encodeToString(keyBytes);
        System.out.println("Generated Secret Key: " + secretKey);
    }
}

