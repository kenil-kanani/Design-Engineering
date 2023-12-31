import React, { useState } from 'react'
import './SignUp.css'
import { Link, useNavigate } from "react-router-dom"
import { Loader } from '../../components/index';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { signUpApi } from '../../apis';


const SignUpForm = () => {

    //* signup function from AuthContext
    const dispatch = useDispatch()
    const navigate = useNavigate()

    //* state variables
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");

    //* loader is visible or not
    // const [isVisible, setIsVisible] = useState(false);
    // const isVisible = useSelector(state => state.authReducer.isLoading)

    //* email and password are empty or not
    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isPasswordEmpty, setIsPasswordEmpty] = useState(false);

    //* handle login function
    const handleLogin = async () => {
        try {
            if (email === "" || password === "" || name === "") {
                if (email === "") {
                    setIsEmailEmpty(true);
                }
                else {
                    setIsEmailEmpty(false);
                }
                if (password === "") {
                    setIsPasswordEmpty(true);
                }
                else {
                    setIsPasswordEmpty(false);
                }
                if (name === "") {
                    setIsNameEmpty(true);
                }
                else {
                    setIsNameEmpty(false);
                }
                return;
            }
            // setIsVisible(true);
            try {
                const response = await signUpApi(name, email, password);
                if (response.success) {
                    toast.success(response.message);
                    localStorage.setItem('X-access-token', response.data)
                    navigate('/verify');
                } else {
                    toast.error(response.message);
                }
            } catch (error) {
                console.log("Catch", error)
            }
            // setIsVisible(false);
        } catch (error) {
            console.error('Error logging in:', error);
        }
    };

    return (
        <form className="form">
            <h1 className='text-center text-3xl'>Sign Up</h1>
            <div className="flex-column">
                <label>Name </label></div>
            <div className="inputForm">
                <input placeholder="Enter your Name" className="input" type="text" onChange={(event) => {
                    setName(event.target.value);
                    setIsNameEmpty(false);
                }} />
            </div>
            {isNameEmpty && <span className='text-red-500 text-xs flex justify-end'>*name is required</span>}

            <div className="flex-column">
                <label>Email </label></div>
            <div className="inputForm">
                <input placeholder="Enter your Email" className="input" type="text" onChange={(event) => {
                    setEmail(event.target.value);
                    setIsEmailEmpty(false);
                }} />
            </div>
            {isEmailEmpty && <span className='text-red-500 text-xs flex justify-end'>*email is required</span>}

            <div className="flex-column">
                <label>Password</label></div>
            <div className="inputForm">
                <input placeholder="Enter your Password" className="input" type="password" onChange={(event) => {
                    setPassword(event.target.value);
                    setIsPasswordEmpty(false);
                }} />
            </div>
            {isPasswordEmpty && <span className='text-red-500 text-xs flex justify-end'>*password is required</span>}

            <div className="flex-row">
                <div>
                    <input type="checkbox" />
                    <label className='ml-1'>Remember me</label>
                </div>
                <span className="span hidden">Forgot password?</span>
            </div>
            <button className="button-submit" onClick={(event) => {
                event.preventDefault();
                handleLogin();
            }}>Sign Up</button>
            <p className="p">Already have an account? <span className="span"><Link to='/signin' >Sign In</Link></span></p>
        </form>
    )
}

const SignUp = () => {
    return (
        <div className='w-screen h-screen flex justify-center items-center'>
            <SignUpForm />
        </div>
    )
}

export default SignUp
