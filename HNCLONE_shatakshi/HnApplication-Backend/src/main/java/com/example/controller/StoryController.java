package com.example.controller;

import com.example.Service.StoryService;
import com.example.model.Story;
import com.example.repository.StoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("story/")
public class StoryController {

    @Autowired
    private StoryRepository storyRepository;

    @GetMapping("newStory")
    public Iterable<Story> getNewStory(){
        Iterable<Story> story = StoryService.sortByNew(this.storyRepository.findAll());
        return story;
    }

    @GetMapping("pastStory")
    public Iterable<Story> getPastStory(){
        Iterable<Story> story = StoryService.sortByPast(this.storyRepository.findAll());
        return story;
    }

    @GetMapping("home")
    public Iterable<Story> getStory(){
        return this.storyRepository.findAll();
    }

    @GetMapping("commentStory")
    public Story getCommentStory(@RequestParam(value = "title") String title){
        Story story = StoryService.findByTitle(this.storyRepository.findAll(),title);
        return story;
    }




}
