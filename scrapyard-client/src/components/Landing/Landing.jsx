import { React, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Landing.css';
import Login from '../Login/Login';
import Register from '../Register/Register';
import CarouselFade from '../Carousel/CarouselFade'

function Landing() {
    const [loginPopup, setLoginPopup] = useState(false);
    const [registerPopup, setRegisterPopup] = useState(false);
    const [authenticated, setAuthenticated] = useState(null);

    useEffect(() => {
        const isUser = localStorage.getItem('authenticated');
        if (isUser) {
            setAuthenticated(isUser);
        }
    }, []);

    return (
        <div className='container-css d-flex flex-column align-items-center'>
            <div className='logo d-flex align-items-center'>
                <h1 className='mx-auto'>scrapyard</h1>
            </div>
            <div className='main d-flex flex-md-row flex-column justify-center p-md-5'>
                <div className='hero d-flex flex-column flex-wrap w-md-50 w-100 mx-md-5 align-items-md-start align-items-center mt-5'>
                    <div className='heading'>
                        <h1>Yet another notes app.</h1>
                        <h1>A scrapyard for your ideas :&#41;</h1>
                    </div>
                    {!authenticated ? (
                        <div className='form-btns d-flex flex-md-column flex-row'>
                            <Link onClick={() => setRegisterPopup(true)} className='d-flex justify-content-center btn-signup mt-2 mx-md-0 mx-2'><span>Sign Up</span></Link>
                            <Link onClick={() => setLoginPopup(true)} className='d-flex justify-content-center btn-login mt-2 mx-md-0 mx-2'><span>Login</span></Link>
                        </div>
                    ) : (
                        <div className='form-btns d-flex flex-md-column flex-row'>
                            <Link to='/dashboard' className='d-flex justify-content-center btn-signup mt-2 mx-md-0 mx-2'><span>Go to Dashboard</span></Link>
                        </div>
                    )}
                </div>
                <div className='slider d-flex flex-column w-md-50 w-100 align-items-center'>
                    <span>~ Jot down the next big thing ~</span>
                    {/* <img className='img-style' src={Img1} alt='editor preview' /> */}
                    <CarouselFade />
                </div>
            </div>
            <div className='footer d-flex align-items-end'>
                <h6>Made with &#x2764; by Kaustubh</h6>
            </div>
            <Register trigger={registerPopup} setTrigger={setRegisterPopup} />
            <Login trigger={loginPopup} setTrigger={setLoginPopup} />
        </div>
    )
}

export default Landing;