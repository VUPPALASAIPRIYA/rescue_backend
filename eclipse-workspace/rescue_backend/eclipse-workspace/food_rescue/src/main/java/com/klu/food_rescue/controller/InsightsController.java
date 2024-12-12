package com.klu.food_rescue.controller;

import com.klu.food_rescue.dto.Report;
import com.klu.food_rescue.dto.Task;
import com.klu.food_rescue.service.InsightsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/insights")
public class InsightsController {

    @Autowired
    private InsightsService insightsService;

    @GetMapping("/reports")
    public List<Report> getReports() {
        return insightsService.getReports();
    }

    @GetMapping("/tasks")
    public List<Task> getTasks() {
        return insightsService.getTasks();
    }
}
