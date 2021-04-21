package com.example.Service;

import com.example.model.Story;

import java.time.format.DateTimeFormatter;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class StoryService {

    public static Iterable<Story> sortByNew(Iterable<Story> story){
        List<Story> result = StreamSupport.stream(story.spliterator(), false).collect(Collectors.toList());
        Comparator<Story> compareByTime = (Story s1, Story s2) -> (int)(convertStringToFloat(s1.getTime())-convertStringToFloat(s2.getTime()));
        Collections.sort(result, compareByTime.reversed());
        return result;
    }

    public static Iterable<Story> sortByPast(Iterable<Story> story){
        List<Story> result = StreamSupport.stream(story.spliterator(), false).collect(Collectors.toList());
        Comparator<Story> compareByTime = (Story s1, Story s2) -> (int)(convertStringToFloat(s1.getTime())-convertStringToFloat(s2.getTime()));
        Collections.sort(result, compareByTime);
        return result;
    }

    public static Story findByTitle(Iterable<Story> story,String title){
        List<Story> result = StreamSupport.stream(story.spliterator(), false).collect(Collectors.toList());
        Story res = null;
        for(Story s: result){
            if((s.getTitle()).equals(title)) {
                res = s;
                break;
             }
        }
        return res;
    }

    public static float convertStringToFloat(String str)
    {
        return Float.parseFloat(str);
    }


}
