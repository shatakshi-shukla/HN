package com.example;

import com.example.model.Comment;
import com.example.model.Story;
import com.example.model.User;
import com.example.repository.CommentRepository;
import com.example.repository.StoryRepository;
import com.example.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;

import java.util.Arrays;
import java.util.List;


@SpringBootApplication
@EnableMongoRepositories()
@ComponentScan(basePackages = {"com.example"})
public class HnApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(HnApplication.class, args);
	}


	@Autowired
	private CommentRepository commentRepository;
	
	@Override
	public void run(String... args) throws Exception {
		List<Long> list = Arrays.asList();
		commentRepository.save(new Comment( "pvsnp",9129227L,list,9129137L,"Interesting, the analysis of NewsWeek story is pretty much what I was anticipating. It seems the Genius ecosystem has grown a fair amount since last I looked at it. I&#x27;d definitely like an account. Messaged you on Genius",
				"1425249665","comment"));
//		userRepository.save(new User(,"shatakshi", "abcde",0));
//		List<Integer> list = Arrays.asList(8952, 9224, 8917, 8884, 8887, 8943, 8869, 8958, 9005, 9671, 8940, 9067);
//
//		storyRepository.save(new Story("dhouston",71L,8863L,list,111L,
//				"1175714200","My YC app: Dropbox - Throw away your USB drive","story","http://www.getdropbox.com/u/2/screencast.html",""))
////		this.userRepository.save(new User("Tom"));
////		this.userRepository.save(new User("Tony"));
	}
}
