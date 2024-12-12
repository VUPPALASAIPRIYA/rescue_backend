package com.klu.food_rescue.repository;

import com.klu.food_rescue.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {
    User findByEmail(String email);  // Ensure this method is defined
    boolean existsByEmail(String email);
}
