import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from 'react-router-dom';
import { Loader } from '../../components/index';
import { signInApi } from '../../apis';
import { useDispatch } from 'react-redux';
import { setIsAuthenticated } from '../../features/auth/authSlice';
import { toast } from 'react-toastify';

const LoginForm = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogin = async () => {
        if (email === '' || password === '') {
            setIsEmailEmpty(email === '');
            setIsPasswordEmpty(password === '');
            return;
        }

        try {
            setIsVisible(true)
            const response = await signInApi(email, password)
            setIsVisible(false)
            toast.success(response.message)
            localStorage.setItem('X-access-token', response.data)
            dispatch(setIsAuthenticated(true))
            navigate('/')
        } catch (error) {
            const { response } = error;
            toast.error(response.data?.message);
            setIsVisible(false)
            if (response.data.err.message == 'Not Verifyed Email') {
                localStorage.setItem('X-access-token', response.data.err.explanation)
                navigate('/verify');
            }
        }
    };

    const handleInputChange = (event, setterFunction, setIsEmptyFunction) => {
        setterFunction(event.target.value);
        setIsEmptyFunction(false);
    };

    return (
        <>
            {isVisible && <div className='absolute'><Loader /></div>}
            <form className='form'>
                {/* <div className='bg-black w-full h-full absolute opacity-[0.4] top-0 left-0 rounded-[20px]'></div> */}
                <h1 className='text-center text-3xl'>Sign In</h1>

                <div className='flex-column'>
                    <label>Email</label>
                </div>
                <div className='inputForm'>
                    <input
                        disabled={isVisible}
                        className={`input ${isVisible && 'cursor-not-allowed'}`}
                        placeholder='Enter your Email'
                        type='text'
                        value={email}
                        onChange={(event) => handleInputChange(event, setEmail, setIsEmailEmpty)}
                    />
                </div>
                {isEmailEmpty && <span className='text-red-500 text-xs flex justify-end'>*email is required</span>}

                <div className='flex-column'>
                    <label>Password</label>
                </div>
                <div className='inputForm'>
                    <input
                        disabled={isVisible}
                        placeholder='Enter your Password'
                        className={`input ${isVisible && 'cursor-not-allowed'}`}
                        type='password'
                        value={password}
                        onChange={(event) => handleInputChange(event, setPassword, setIsPasswordEmpty)}
                    />
                </div>
                {isPasswordEmpty && <span className='text-red-500 text-xs flex justify-end'>*password is required</span>}

                <div className='flex-row justify-end'>
                    <span className={`span ${isVisible && 'cursor-not-allowed'}`}>Forgot password?</span>
                </div>
                <button className={`button-submit ${isVisible && 'cursor-not-allowed bg-gray-400'}`} disabled={isVisible} onClick={(event) => {
                    event.preventDefault();
                    handleLogin();
                }}>Sign In</button>
                <p className='p'>
                    Don't have an account? {isVisible ? <span className={`span cursor-not-allowed`}>Sign Up</span> : <span className={`span`}><Link to='/signup'>Sign Up</Link></span>}
                </p>
            </form>
        </>
    );
};

const Login = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <LoginForm />
        </div>
    );
};

export default Login;
