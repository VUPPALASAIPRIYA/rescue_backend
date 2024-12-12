package com.klu.food_rescue.dto;

public class Report {

    private String title;
    private int total;
    private String action;

    public Report(String title, int total, String action) {
        this.title = title;
        this.total = total;
        this.action = action;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getTotal() {
        return total;
    }

    public void setTotal(int total) {
        this.total = total;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
