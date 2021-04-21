package com.example.repository;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.mongodb.repository.MongoRepository;

import com.example.model.User;

@Repository
public interface UserRepository extends MongoRepository<User,String> {
}
