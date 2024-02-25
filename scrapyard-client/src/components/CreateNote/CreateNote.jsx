import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from '../Header/Header';
import Button from 'react-bootstrap/esm/Button';
import './CreateNote.css';


function CreateNote() {

    const navigate = useNavigate();
    const [title, setTitle] = useState('');
    const [note, setNote] = useState('');
    const userId = localStorage.getItem('userId');

    const discard = () => {
        navigate('/dashboard');
    }

    const configuration = {
        method: "post",
        url: "http://localhost:5000/update",
        data: {
            userId,
            title,
            note,
        },
    };

    const handleSubmit = (e) => {
        axios(configuration)
            .then((result) => {
                console.log(result);
                navigate('/dashboard');
            })
            .catch((error) => {
                console.log(error);
            });
    }

    return (
        <div className='note-container d-flex flex-column justify-content-center align-items-center w-100'>
            <div className='header d-flex w-100 align-items-center'>
                <Header />
            </div>
            <div className='btns d-flex justify-content-center align-items-center my-2 w-100'>
                <div className='discardBtn mx-3'>
                    <Button variant='danger' onClick={discard}>Discard</Button>
                </div>
                <div className='submitBtn mx-3'>
                    <Button variant='success' onClick={(e) => handleSubmit(e)}>Save</Button>
                </div>
            </div>
            <div className='editor d-flex flex-column w-100 p-5'>
                <textarea className='titleText' maxLength={15} placeholder='Title'
                    onChange={(e) => { setTitle(e.target.value) }}></textarea>
                <span className='noteText mt-3' role='textbox' contentEditable
                    onInput={(e) => {
                        setNote(e.currentTarget.innerHTML);
                    }}></span>
            </div>
        </div>
    )
}

export default CreateNote;