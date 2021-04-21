package com.example.repository;

import com.example.model.Comment;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

@Repository
public interface CommentRepository extends MongoRepository<Comment,String> {
}
