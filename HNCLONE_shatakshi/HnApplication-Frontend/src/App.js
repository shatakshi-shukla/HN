import React, { Component } from 'react';
import Navb from './Components /Navbar';
import axios from '../src/Firebase';
import StoryCard from './Components /StoryCard';
import './App.css'
import PastStory from './Components /PastStory/PastStory';
import {Route} from 'react-router-dom'
import Login from './Components /Login/Login';
import Comments from './Components /Comments/Comments';
import CommentsPage from './Components /CommentsPage';
import New from './Components /New/New';
import {connect} from 'react-redux';



class App extends Component {
  state = {
    storys : [],
  }
  
  componentWillMount(){
    console.log(this.props);
    axios.get('http://localhost:8080/story/home')
    .then(response =>{
      console.log(response)
      this.setState({storys :response.data})
      console.log(this.state.storys)
    });

  }
  componentDidMount(){
    console.log(this.props)
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
      <div className="app-container">
        <Navb/>
        <Route path='/PastStory' component={PastStory} props={storys}/>
        <Route path='/' exact> 
         <div className='app'>
           <ol>{storys}</ol>
         </div>
         </Route>
         <Route path='/New' component={New}/>
         <Route path='/comment' component={Comments}/>
         <Route path='/login' component={Login} />
         <Route path = '/logout' component={Login}/>
         <Route path="/CommentsPage"component={CommentsPage}/>
      </div>
      
    )
  }
 
  
}
const mapStateToProps = state =>{
     return{
       login: state.login
       };
     };


export default connect(mapStateToProps)(App);
