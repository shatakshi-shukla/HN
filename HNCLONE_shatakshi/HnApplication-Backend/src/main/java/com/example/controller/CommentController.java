package com.example.controller;


import com.example.Service.StoryService;
import com.example.model.Comment;
import com.example.model.Story;
import com.example.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("comment/")
public class CommentController {

    @Autowired
    private CommentRepository commentRepository;

    @GetMapping("all")
    public Iterable<Comment> getComment(){
        return this.commentRepository.findAll();
    }


}
