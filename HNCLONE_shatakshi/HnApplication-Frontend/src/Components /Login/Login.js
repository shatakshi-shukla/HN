import {React,Component} from 'react';
import './Login.css';
import axios from '../../Firebase';
import {connect,useSelector} from 'react-redux';
import * as actionTypes from '../../store/action';


 class Login extends Component{
    
         state={
           user:{
            username : "",
            password : ""
         }
        }

    componentWillMount(){
        console.log(this.props);
    }
    usernameChanged=(event)=>{
        let user = {...this.state.user};
        user.username =  event.target.value;
        this.setState({user});
    }
    passwordChanged =(event)=>{
        let user = {...this.state.user};
        user.password =  event.target.value;
        this.setState({user});
    }
    formSubmit=(event)=>{
        event.preventDefault();
        this.setState({login:true});
        const user = {
            ...this.state.user,
            karma:0,
            id:1,
        }
        axios.post('http://localhost:8080/api/signup',user)
        .then(console.log("user created"));
    }
    validate=(event)=>{
        debugger;
        event.preventDefault();
        axios.get("http://localhost:8080/api/users")
        .then((response)=>{
            response.data.map(user=>{
                if(user.username ===this.state.user.username && user.password===this.state.user.password){
                    
                    this.props.loginState(true);
                    this.props.history.replace('/');
                }
            });
        })
    }
    

     render(){
         
        return(
            <div className="loginSign">
                <form onSubmit={this.validate}>
                  <h4>Login</h4>
                  <p>Username : <input type="text" name="username"  onChange={this.usernameChanged}></input></p>
                  <p>Password : <input type="password" name="password" onChange={this.passwordChanged}></input></p>
                  <button >Login</button>
                </form>
                <form onSubmit={this.formSubmit}>
                    <h4>Create Account</h4>
                    <p>Username : <input type="text" name="username"  onChange={this.usernameChanged}></input></p>
                    <p>Password : <input type="password" name="password"  onChange={this.passwordChanged}></input></p>
                    <button>Sign Up</button>
                </form>
            </div>
        );
     }
 }

const mapStateToProps = state=>{
    return{
        login : state.login
    };
}

const mapDispatchToProps =  dispatch =>{
    return{
    loginState :(login)=>dispatch({type:actionTypes.SET_LOGIN,login:true})
    }
}

 export default connect(mapStateToProps,mapDispatchToProps)(Login);