

const CommentCard = (props) =>{
    return (
        <li className="list">
            <div><p>{props.by} | {dateFormat(props.time)}</p></div>
            <div><p>{props.text}</p></div>
        </li>
      );
}

function dateFormat(unixTimestamp) {
    const milliseconds = unixTimestamp * 1000 
    const dateObject = new Date(milliseconds)
    const humanDateFormat = dateObject.toLocaleString()     
    return humanDateFormat;
}

export default CommentCard;