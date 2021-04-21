package com.example.model;



public class User {
	

    private int id;
    private String username;
    private String password;
    private int karma;



    public User(){

    }


    public User(int id, String username, String password, int karma){
        super();
        this.username = username;
        this.password = password;
        this.karma = karma;
        this.id = id;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }


    public long getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

}
