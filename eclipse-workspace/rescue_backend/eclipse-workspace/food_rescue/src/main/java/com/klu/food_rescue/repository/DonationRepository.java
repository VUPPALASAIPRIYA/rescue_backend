package com.klu.food_rescue.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.klu.food_rescue.entity.Donation;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByStatus(String status);
}
