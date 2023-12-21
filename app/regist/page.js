'use client';
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './regist.css';
import 'transition-style';

export default function Regist() {
    const [redirecting, setRedirecting] = useState(false);
    const [formData, setFormData] = useState({
        username: '',
        fullname: '',
        email: '',
        password: '',
    });

    function notif() {
        const isFormValid = validateForm();
        const isEmailValid = validateEmail(formData.email);

        if (isFormValid && isEmailValid) {
            toast.success('Account Created', {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                onClose: handleToastClose,
            });
        } else {
            let errorMessage = '';

            if (!isFormValid) {
                errorMessage = 'Please fill in all fields with the correct format.';
            }

            toast.error(errorMessage, {
                position: "bottom-left",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        }
    }

    function handleToastClose() {
        setRedirecting(true);
        setTimeout(() => {
            window.location.href = '/login';
        }, 3000);
    }

    function validateForm() {
        const isValidEmail = validateEmail(formData.email);

        return (
            formData.username.trim() !== '' &&
            formData.fullname.trim() !== '' &&
            formData.email.trim() !== '' &&
            isValidEmail
        );
    }

    function handleInputChange(e) {
        const { id, value } = e.target;

        if (id === 'email') {
            const isValidEmail = validateEmail(value);
            if (!isValidEmail) {
                console.log('Invalid email format');
                return;
            }
        }

        setFormData((prevData) => ({
            ...prevData,
            [id]: value,
        }));
    }

    function validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        const hasAtSymbol = email.includes('@');

        return emailRegex.test(email) && hasAtSymbol;
    }

    return (
        <>
            <img src="/Assets/Image/Login/login.png" alt="" className="ImageBackground" />

            <div className="content">
                <div className="container">

                    <div className="form">
                        <h1 className="lg-txt">
                            <span className="sm-txt">START FOR FREE</span>
                            Create new account
                            <span className="sm-txt">Already A Member? <a href="">Sign In</a></span>
                        </h1>

                        <div className="field-wrapper">
                            <input type="text" className="field" id="username" placeholder="Username" autoComplete="off" required={true} onChange={handleInputChange} />
                            <input type="text" className="field" id="fullname" placeholder="Fullname" autoComplete="off" required onChange={handleInputChange} />
                        </div>
                        <div className="field-wrapper">
                            <input type="email" className="field" id="email" placeholder="Email" autoComplete="off" required pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" onChange={handleInputChange} />
                        </div>
                        <div className="field-wrapper">
                            <input type="password" className="field" id="password" placeholder="Password" required minLength={6} onChange={handleInputChange} />
                            <input type="submit" className="field" id="submit" value="Create Account" onClick={notif} />
                        </div>
                        
                        <hr/>   
                        <h3 className="sm-txt" id="conn">Or Connect With</h3>

                        <div className="connect">
                        <div className="icon">
                            <img src="/Assets/Image/Login/google.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/Assets/Image/Login/facebook.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/Assets/Image/Login/github.png" alt="" />
                        </div>
                    </div>
                    </div>
                    
                </div>

                <ToastContainer
                    position="bottom-left"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                />
            </div>
        </>
    );
}
