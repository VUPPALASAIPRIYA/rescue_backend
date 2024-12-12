package com.klu.food_rescue.dto;

public class Task {

    private String title;
    private int pending;
    private String action;

    public Task(String title, int pending, String action) {
        this.title = title;
        this.pending = pending;
        this.action = action;
    }

    // Getters and Setters
    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getPending() {
        return pending;
    }

    public void setPending(int pending) {
        this.pending = pending;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
