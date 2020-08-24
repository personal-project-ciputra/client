import Swal from 'sweetalert2'
import jwt_decode from 'jwt-decode';
const REGISTER = 'REGISTER';
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';
 
const regis = (payload) => {
    return {type:REGISTER, payload}
}

const userlogin = (payload) => {
    return {type:LOGIN, payload}
}

const register =  (form,history) => async (dispatch) => {
    try{
        const endpoint = `${process.env.REACT_APP_API_URL}/user/register`;
        const options = {
            method:'POST',
            body: JSON.stringify(form),
            headers:{
                'content-type':'application/json'
            }
            
        }
    
        const response = await fetch(endpoint, options);
        const result = await response.json()
        console.log(response.status);
        if(response.status === 200){
            Swal.fire({
                title: 'Email Successfully Register',
                text: '',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
            history.push('/login')
        }
        else{
            Swal.fire({
                title: 'Email Has Been Registered',
                text: '',
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }
        dispatch(regis(result))
       
    }
    catch(error){
        console.log(error);
    }
}

const login = (form,history) => async (dispatch) => {
    try{
        const endpoint = `${process.env.REACT_APP_API_URL}/user/login`;
        const options = {
            method:'POST',
            body: JSON.stringify(form),
            headers:{
                'content-type':'application/json'
            }
            
        }
        const response = await fetch(endpoint, options);
        const result = await response.json();
        const decoded = await jwt_decode(result.result)
        if(response.status === 200){
            Swal.fire({
                title: 'Login Success',
                text: '',
                icon: 'success',
                confirmButtonText: 'Cool'
              })
              localStorage.setItem('token', result.result)
              dispatch(userlogin(result))
              history.push('/')
        }
      else if(response.status === 403){
          localStorage.clear()
      }
     
    }
    catch(error){
        console.log(error);
    }
}
    const logout = (history) => (dispatch) => {
        Swal.fire({
            title: 'Logout',
            text: '',
            icon: 'success',
            confirmButtonText: 'Cool'
          })
          localStorage.clear();
          history.push('/');
          dispatch({type:LOGOUT})
}
   


export {
    regis,REGISTER,register,login,LOGIN,userlogin, LOGOUT,logout
}