import './StoryCard.css';
import {Route,Link,withRouter} from 'react-router-dom'
import CommentsPage from './CommentsPage'; 


const StoryCard = (props) =>{
    return (
        <li className="list">
           <h4><a href={props.url}>{props.title}</a></h4>
           <span className="info">
               <p>{props.points} points by {props.author} {dateFormat(props.time)} | 
               {props.comments ? <span>{props.comments.length} comments</span> : null}
               </p>
           </span>
          
        </li>
      );
}

function dateFormat(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000 
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString()     
    return humanDateFormat;
}

export default withRouter(StoryCard);
