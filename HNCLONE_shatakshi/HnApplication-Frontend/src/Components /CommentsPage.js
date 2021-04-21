import  { useState } from 'react';
import {withRouter} from 'react-router-dom'
import {useLocation} from "react-router-dom";
import StoryCard from './StoryCard';
import {react,Component} from 'react';
import { Button} from 'react-bootstrap';
import '../App.css';

import axios from '../Firebase';

class CommentsPage extends Component{
    state = {
        storys : [],
      }
      
      componentWillMount(){
        const s = this.props.location.state.title.title; 
        axios.get('http://localhost:8080/story/commentStory',{
            params:{
                title :s
            }
        })
        .then(response =>{
          this.setState({storys :response.data})
        });
    
      }
     
    render(){
        const story = this.state.storys
        return(
            <div className="app"><
                StoryCard title = {story.title} 
                key= {story.id}
                url = {story.url}
                author = {story.by}
                time = {story.time}
                points = {story.score}
                comments = {story.kids} />
                <textarea className="list"></textarea>
                <br></br>
                <Button>Submit</Button>
            </div>
            
        );
    }
}

export default withRouter(CommentsPage);