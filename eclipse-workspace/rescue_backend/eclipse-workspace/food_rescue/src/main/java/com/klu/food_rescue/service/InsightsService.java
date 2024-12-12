package com.klu.food_rescue.service;

import com.klu.food_rescue.dto.Report;
import com.klu.food_rescue.dto.Task;
import com.klu.food_rescue.repository.DonationRepository;
import com.klu.food_rescue.repository.RecepientOrganizationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.ArrayList;

@Service
public class InsightsService {

    @Autowired
    private DonationRepository donationRepository;

    @Autowired
    private RecepientOrganizationRepository organizationRepository;

    public List<Report> getReports() {
        List<Report> reports = new ArrayList<>();

        // Calculate total donations
        long totalDonations = donationRepository.count();

        // Calculate pending approvals
        long pendingApprovals = donationRepository.findByStatus("Pending").size();

        // Calculate total recipient organizations
        long totalRecipients = organizationRepository.count();

        // Add insights to reports
        reports.add(new Report("Total Donations", (int) totalDonations, "View Reports"));
        reports.add(new Report("Pending Approvals", (int) pendingApprovals, "Approve Now"));
        reports.add(new Report("Total Recipients", (int) totalRecipients, "View Recipients"));

        return reports;
    }

    public List<Task> getTasks() {
        List<Task> tasks = new ArrayList<>();

        // Fetch the number of pending donations
        int pendingDonations = donationRepository.findByStatus("Pending").size();

        // Placeholder for analysis tasks (future implementation can integrate more logic)
        tasks.add(new Task("Review Pending Donations", pendingDonations, "Review"));
        tasks.add(new Task("Analyze Donor Trends", 3, "Start Analysis")); // Example placeholder task

        return tasks;
    }
}
