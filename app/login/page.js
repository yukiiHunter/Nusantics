'use client';
import './login.css';
import { useState, useEffect } from 'react';

export default function Login () {
        const [backgroundImagePath, setBackgroundImagePath] = useState('/Assets/Image/Login/ImageLogin.png');
      
        useEffect(() => {
            const handleResize = () => {
            const screenWidth = window.innerWidth;
      
            if (screenWidth >= 1366 && screenWidth <= 1920) {
                setBackgroundImagePath('/Assets/Image/Login/ImageLogin2.png');
            } else {
                setBackgroundImagePath('/Assets/Image/Login/ImageLogin.png');
            }
          };

          handleResize();
          window.addEventListener('resize', handleResize);
      
          return () => {
            window.removeEventListener('resize', handleResize);
          };
        }, []);

    return (
        <>
            <img src={backgroundImagePath} alt="" className="ImageBackground" />

            <div className="container">

                <div className="text1">
                    <p>
                        Hello User
                    </p>
                </div>

                <div className="text2">
                    <h2>
                        Log in
                    </h2>
                </div>

                <div className="text3">
                    <p>
                        Don’t have an account yet? <a href='' className='HrefSignUp'>
                                        Sign Up
                                      </a>
                    </p>
                </div>

                <form action="">
                    <div className="input">
                        <input type="email" className="Input1" placeholder="Email" />
                        <input type="password" className="Input2" placeholder="Password" />
                    </div>
                    <div className="submit">
                        <button type="button" className="SubmitBTN" >
                            Login
                        </button>
                    </div>
                </form>

                <hr />

                <p className="ConnectWith">
                    Or Connect With
                </p>

                <div className="Sosial">
                    <a href="#" className="Icon">
                       <img src="/Assets/Image/Login/google.png" className='IconLogo' alt="" />
                    </a>
                    <a href="#" className="Icon">
                       <img src="/Assets/Image/Login/facebook.png" className='IconLogo' alt="" />
                    </a>
                    <a href="#" className="Icon">
                       <img src="/Assets/Image/Login/github.png" className='IconLogo' alt="" />
                    </a>
                </div>

            </div>
        </>
    )
}
