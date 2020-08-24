import React,{useState} from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {login} from '../../redux/action'
import './regis.scss'


const UserLogin = () => {
    

const [form, setForm] = useState({
    email:'',
    password:''
})
const history = useHistory();
const dispatch = useDispatch();
    
   const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(login(form, history))

    }
    const handleChange = (event) => {
        setForm({
            ...form,[event.target.name]:event.target.value
        })
    }


    return (
        <div className='form-container'>
            <form onSubmit={handleSubmit} className="form">
                <div className="inputs-container">
                <h1 className='h1'>Sign In</h1>
                <input onChange={handleChange} className='input-regis' type="email" name="email" id="email"/>
                <label className='label' htmlFor="email">Email</label>
                <input onChange={handleChange} className='input-regis' type="password" name="password" id="password"/>
                <label className='label' htmlFor="password">Password</label>
                <div className="button-regis">
                <button className='regis'>Login</button>
                </div>
                </div>
            </form>
        </div>
    )
}

export default UserLogin
