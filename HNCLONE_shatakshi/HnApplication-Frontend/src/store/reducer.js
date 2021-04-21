import * as actionTypes from "./action";

const initialState ={
    login:false
};

const reducer = (state = initialState,action) =>{
    console.log(action);
  switch (action.type) {
      case actionTypes.SET_LOGIN:
          return{
              login: action.login
          }
      default:
          return state;
  }
};

export default reducer;
