import { React, useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './Register.css';

function Register(props) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [passMatch, setPassMatch] = useState('')

    let registerRef = useRef();

    const resetForm = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPass('');
        setPassMatch('');
    }

    const handler = (e) => {
        if (!registerRef.current.contains(e.target)) {
            props.setTrigger(false);
            resetForm();
        }
    }

    const configuration = {
        method: "post",
        url: "http://localhost:5000/register",
        data: {
            name,
            email,
            password,
        },
    };

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (confirmPass === password) {
            axios(configuration)
                .then((result) => {
                    console.log(result);
                    navigate('/dashboard');
                })
                .catch((error) => {
                    console.log(error);
                });

            resetForm();
        }
        else {
            setPassMatch('Passwords do not match');
        }
    }

    return (props.trigger) ? (
        <div className='register-container d-flex justify-content-center align-items-center' onClick={handler}>
            <div className='register-form d-flex flex-column p-5' ref={registerRef}>
                <h3>Register</h3>
                <form className='d-flex flex-column' onSubmit={(e) => handleSubmit(e)}>
                    <input className='my-2 p-2' type='text' name='name' placeholder='Name' value={name} onChange={(e) => setName(e.target.value)} required />
                    <input className='my-2 p-2' type='text' name='email' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className='my-2 p-2' type='password' name='password' value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} required />
                    <input className='my-2 p-2' type='password' name='confirm' value={confirmPass} placeholder='Confirm Password' onChange={(e) => setConfirmPass(e.target.value)} required />
                    {passMatch ? (
                        <span>{passMatch}</span>
                    ) : ""}
                </form>
                <div className='btn-group d-flex justify-content-end my-2'>
                    <button className='submit-btn py-1 px-2' onClick={(e) => handleSubmit(e)}>Submit</button>
                </div>
            </div>
        </div>
    ) : "";
}

export default Register;