import React from 'react'
import './navigation.scss'
import {useHistory} from 'react-router-dom';

const Navigation = () => {
    const history = useHistory()
    return (
        <div className='navigation'>
            <nav className='nav-container'>
                <div className="button-register">
                    <button onClick={() => history.push('/register')} className="daftar">Daftar</button>
                    <button onClick={() => history.push('/login')} className="login">Login</button>
                </div>
            </nav>
        </div>
    )
}

export default Navigation
