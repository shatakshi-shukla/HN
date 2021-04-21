import React, { Component,useState} from 'react';
import { Nav,Navbar,Button} from 'react-bootstrap';
import logo from '../Image/logo.png';
import './Navbar.css'
import {Link} from 'react-router-dom';
import {connect,useSelector,useDispatch} from 'react-redux';
import * as actionTypes from '../store/action';

const  Navb = () => {
    const login = useSelector(state => state.login)
    const dispatch = useDispatch();

    const logout = () =>{
      dispatch({type:actionTypes.SET_LOGIN,login:false});
    }
    return (
        <Navbar className="navbar">
            <Navbar.Brand href=""><Link to='./'>
            <img src={logo} alt={logo} className="logo" />
              <strong>HACKERNEWS</strong>
            </Link>
            </Navbar.Brand>{"   "}
            <Nav.Link><Link to='./new'>New</Link></Nav.Link>{" | "}
            <Nav.Link><Link to='./PastStory'>Past</Link></Nav.Link>{" | "}
            <Nav.Link ><Link to='./comment'>Comment</Link></Nav.Link>
            <Nav.Link className="login"> {login?<Link to='./'><Button onClick={logout}>Logout</Button></Link>:<Link to='./Login'>Login</Link>}</Nav.Link>
      </Navbar>
    );
   }



export default Navb;
//<Nav.Link className="login"> {login?<Link to='./'>Logout</Link>:<Link to='./Login'>Login</Link>}</Nav.Link>
{/* <Nav.Link className="login"> {login?<Link to='./' render={(renderProps) => (
              <button
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
                className="login"
              >
                Logout 😦
              </button>
            )}
            onLogoutSuccess={logout}
          />:<Link to='./Login'>Login</Link>}</Nav.Link> */}


