import React, { useState, useContext } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Loader } from '../../components/index';

const LoginForm = () => {
    const { login } = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    const handleLogin = async () => {
        if (email === '' || password === '') {
            setIsEmailEmpty(email === '');
            setIsPasswordEmpty(password === '');
            return;
        }

        try {
            setIsVisible(true);
            await login(email, password);
        } catch (error) {
            console.error('Error logging in:', error);
        } finally {
            setIsVisible(false);
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
                <h1 className='text-center text-3xl'>Sign In</h1>

                <div className='flex-column'>
                    <label>Email</label>
                </div>
                <div className='inputForm'>
                    <input
                        placeholder='Enter your Email'
                        className='input'
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
                        placeholder='Enter your Password'
                        className='input'
                        type='password'
                        value={password}
                        onChange={(event) => handleInputChange(event, setPassword, setIsPasswordEmpty)}
                    />
                </div>
                {isPasswordEmpty && <span className='text-red-500 text-xs flex justify-end'>*password is required</span>}

                <div className='flex-row'>
                    <div>
                        <input type='checkbox' />
                        <label className='ml-1'>Remember me</label>
                    </div>
                    <span className='span'>Forgot password?</span>
                </div>
                <button className='button-submit' onClick={(event) => {
                    event.preventDefault();
                    handleLogin();
                }}>Sign In</button>
                <p className='p'>
                    Don't have an account? <span className='span'><Link to='/signup'>Sign Up</Link></span>
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
