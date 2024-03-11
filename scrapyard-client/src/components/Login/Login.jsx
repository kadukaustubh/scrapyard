import { React, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Login.css';

function Login(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState(null);

    let loginRef = useRef();
    const handler = (e) => {
        if (!loginRef.current.contains(e.target)) {
            props.setTrigger(false);
            resetForm();
        }
    }

    const resetForm = () => {
        setEmail('');
        setPassword('');
    }

    const configuration = {
        method: "post",
        url: "https://scrapyard-server.onrender.com/login",
        data: {
            email,
            password,
        },
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        axios(configuration)
            .then((result) => {
                console.log(result);
                localStorage.setItem('authenticated', true);
                localStorage.setItem('userId', result.data.id);
                setLoginError(null)
                setTimeout(() => {
                    navigate('/dashboard');
                }, 2000);
            })
            .catch((error) => {
                console.log(error);
                resetForm();
                setLoginError('Invalid credentials! Try again.');
            });
    }

    return (props.trigger) ? (
        <div className='login-container d-flex justify-content-center align-items-center' onClick={handler}>
            <div className='login-form d-flex flex-column p-5' ref={loginRef}>
                <h3>Login</h3>
                <form className='d-flex flex-column' onSubmit={(e) => handleSubmit(e)}>
                    <input className='my-2 p-2' type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className='my-2 p-2' type='password' name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                    {loginError && <span>{loginError}</span>}
                </form>
                <div className='btn-group d-flex justify-content-end my-2'>
                    <button className='submit-btn py-1 px-2' onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default Login;