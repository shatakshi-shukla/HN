import {react,Component} from 'react';
import StoryCard from '../StoryCard';
import axios from '../../Firebase';
import './New.css'

class New extends Component{
    state = {
        storys : [],
      }
      
      componentWillMount(){
        axios.get('http://localhost:8080/story/newStory')
        .then(response =>{
          console.log(response)
          this.setState({storys :response.data})
          console.log(this.state.storys)
        }); 
       
      }
      render(){
        const storys = this.state.storys.map(story =>{
          return <StoryCard  
          title = {story.title} 
          key= {story.id}
          url = {story.url}
          author = {story.by}
          time = {story.time}
          points = {story.score}
          comments = {story.kids}
          />
        });
        return(
            <ol className='app'>{storys}</ol>
        )
    }

}
export default New;