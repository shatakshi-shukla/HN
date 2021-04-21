import {react,Component} from 'react';
import axios from '../../Firebase'
import CommentCard from './CommentCard';

class Comments extends Component{
    state = {
        comments : [],
      }
   componentDidMount(){
       axios.get("http://localhost:8080/comment/all")
       .then(response =>{
          console.log(response)
          this.setState({comments:response.data})
       });
   }
   render(){
    const comments = this.state.comments.map(comment =>{
        return <CommentCard  
        by = {comment.by} 
        key= {comment.id}
        time = {comment.time}
        text = {comment.text}
        />
      });
       return(
           <div className="app">
               <ol>{comments}</ol>
           </div>
       )
   }
}

export default Comments;