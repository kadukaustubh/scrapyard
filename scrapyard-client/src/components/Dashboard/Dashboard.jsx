import { React, useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from 'react-bootstrap/esm/Button';
import Header from '../Header/Header';
import './Dashboard.css';
import Img from '../../assets/bin.png';

function Dashboard() {

    const navigate = useNavigate();
    const [isBusy, setBusy] = useState(true);
    const [list, setList] = useState([]);
    const [refresh, setRefresh] = useState(false);
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        const isUser = localStorage.getItem('authenticated');

        if (isUser) {
            setBusy(false);
            axios.get('http://localhost:5000/dashboard')
                .then((res) => {
                    setList(res.data);
                })
                .catch((error) => {
                    console.log(error);
                })
        }
        else {
            navigate('/');
        }
    }, [refresh]);

    const createNote = () => {
        navigate('/add');
    }

    const deleteNote = (id) => {
        axios.delete(`http://localhost:5000/update/${id}`)
            .then((res) => {
                console.log(res);
                setRefresh(true);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    return (
        <div className='dash-container d-flex flex-column'>
            <Header />
            {isBusy ? (
                ''
            ) : (
                <div className='d-flex flex-column justify-content-center align-items-center p-md-5 p-3'>
                    <div className='add-btn mb-5'>
                        <button className='create-btn' onClick={createNote}>Create Note</button>
                    </div>
                    <div className='notes-grid d-flex flex-wrap flex-md-row flex-column w-100 justify-content-center align-items-center'>
                        {list ? (
                            list.map((item) => {
                                if (item.userId === userId) {
                                    return (
                                        <div className='d-flex flex-column note-block m-4' key={item._id}>
                                            <Link className='note-prev p-2' to={`/edit/${item._id}`}>
                                                {item.note}
                                            </Link>
                                            <div className='d-flex w-100 justify-content-between align-items-center'>
                                                <Link className='note-title d-flex my-2 justify-content-between align-items-center'>
                                                    {item.title}
                                                </Link>
                                                <div className='note-del d-flex'>
                                                    <img onClick={() => deleteNote(item._id)} src={Img} alt='bin' />
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            })
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default Dashboard;