package com.klu.food_rescue.utility;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.stereotype.Component;

import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {
    // Use a 256-bit key for HS256 (32 bytes)
    private static final String SECRET_KEY = "e0uz2vEaopURdezy7y1c2TeRD8sWJIh3vELR6k3wYi8=";  // 32 bytes (256 bits)
    private final Key key = Keys.hmacShaKeyFor(SECRET_KEY.getBytes()); // Ensure this is a 256-bit key for HS256

    private static final long EXPIRATION_TIME = 86400000; // 1 day in milliseconds

    public String generateToken(String email) {
        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(new Date())
                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
                .signWith(key)
                .compact();
    }

    public String extractEmail(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(token);
            return true;
        } catch (JwtException e) {
            return false;
        }
    }
}
