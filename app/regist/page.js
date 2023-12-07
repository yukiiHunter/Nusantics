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
            <img src="/Assets/Image/Login/ImageLogin.png" alt="" className="ImageBackground" />

            <div className="isi">
                <div className="container">
                    <div className="Text">
                        <div className="TextKecil">
                            <p>START FOR FREE</p>
                        </div>

                        <div className="TextBesar">
                            <h2 className="font">Create new account</h2>
                        </div>

                        <div className="SignIn">
                            <p>Already A Member? <a href='' className='HrefSignIn'>Sign In</a></p>
                        </div>
                    </div>

                    <form>
                        <div className="Input">
                            <div className="InputKecil">
                                <input type="text" id="username" className="InputKiri" placeholder="Username" required={true} onChange={handleInputChange} />
                                <input type="text" id="fullname" className="InputKanan" placeholder="Fullname" required onChange={handleInputChange} />
                            </div>

                            <div className="InputBesar">
                                <input type="email" id="email" className="InputAtas" placeholder="Email" required pattern="^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$" onChange={handleInputChange} />
                                <input type="password" id="password" className="InputBawah" placeholder="Password" required minLength={6} onChange={handleInputChange} />
                                <button type="button" className="SubmitBTN" onClick={notif}>Create account</button>
                            </div>
                        </div>
                    </form>

                    <svg className='Garis' xmlns="http://www.w3.org/2000/svg" width="290" height="2" viewBox="0 0 290 2" fill="none">
                        <path d="M290 1L1.12057e-05 1" stroke="black" stroke-opacity="0.5" stroke-width="1"/>
                    </svg>

                    <p className="ConnectWith">Or Connect With</p>

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
