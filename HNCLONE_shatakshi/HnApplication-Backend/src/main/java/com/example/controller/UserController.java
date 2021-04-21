package com.example.controller;

import com.example.model.Story;
import com.example.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.example.model.User;
import com.example.repository.UserRepository;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/")
public class UserController {

    @Autowired
    private UserRepository userRepository;



    @GetMapping("users")
    public Iterable<User> getUsers(){
        return this.userRepository.findAll();
    }

    @PostMapping("signup")
    public void addUser(@RequestBody User user){
        int id = (int)(Math.random()*5);
        user.setId(id);
        userRepository.save(user);
    }


}
