import React, { useContext, useState, useRef } from 'react'
import './Navbar.css'
import { Link } from "react-router-dom"
import { AuthContext } from '../../context/AuthContext';

import { VscAccount } from "react-icons/vsc";
import { useClickAway } from 'react-use';
import { Typography } from "@material-ui/core";
import { AiOutlineClose, AiFillPropertySafety } from "react-icons/ai";
import { ImProfile } from "react-icons/im";
import { BiLogIn } from "react-icons/bi";



export const Navbar = () => {

    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    const magicDivRef = useRef(null);

    // close dropdown when clicking outside
    useClickAway(magicDivRef, () => {
        setIsDropdownOpen(false);
    });


    const { isAuthenticated, logout, user } = useContext(AuthContext);

    return (
        !isAuthenticated

            ?

            <div className='root-nav w-screen h-[70px]'>
                <h1 className='text-2xl'>Social Hezalt</h1>
                <div className=''>
                    <Link to='/' className='mx-4'>Home</Link>
                    <Link to='/contact' className='mx-4'>Contact</Link>
                    <Link to='/signin' className='mx-4'>Sign In</Link>
                    <Link to='/signup' className='mx-4'>Sign Up</Link>
                </div>
            </div>

            :

            <div className='root-nav w-screen h-[70px]'>
                <h1 className='text-2xl'>Social Hezalt</h1>
                <div className='flex items-center'>
                    <Link to='/' className='mx-4'>Home</Link>
                    <Link to='/contact' className='mx-4'>Contact</Link>
                    <span className='cursor-pointer inline-block text-2xl text-blue-500 mx-4 mr-8' onClick={() => {
                        toggleDropdown();
                    }}>
                        <VscAccount />
                    </span>
                    {(
                        <div ref={magicDivRef} className=" magic-div w-[300px] h-screen bg-amber-300 fixed z-10"
                            style={{
                                width: isDropdownOpen ? "300px" : "0",
                                height: "100%",
                                backgroundColor: "#1a1a1a", // You can adjust the background color as needed
                                transition: "width 0.5s" // Adjust the transition timing as needed
                            }}
                        >
                            <div className="text-2xl m-1 cursor-pointer border inline-block rounded-lg text-blue-300 border-blue-300" onClick={() => setIsDropdownOpen(false)}>
                                <AiOutlineClose />
                            </div>
                            <div className="w-[300px] mt-3 mb-5 flex justify-center">
                                <Typography variant={"h5"}>Hey {user.name}</Typography>
                            </div>
                            <div onClick={() => { setIsDropdownOpen(false) }} className="cursor-pointer pl-[25px]">
                                <LinkTag to={'/profile'}>
                                    <ImProfile className="text-2xl" />
                                    <div >My Profile</div>
                                </LinkTag>
                                <div onClick={logout}>
                                    <LinkTag>
                                        <BiLogIn className="text-2xl" />
                                        <div>Log Out</div>
                                    </LinkTag>
                                </div>
                                <LinkTag to={'/myprojects'}>
                                    <AiFillPropertySafety className="text-2xl" />
                                    <div>My Project</div>
                                </LinkTag>
                            </div>
                        </div>
                    )}
                </div>
            </div>
    )
}


function LinkTag(props) {
    return (
        <Link to={props.to} className="w-[250px] h-[35px] mt-3 flex justify-center items-center gap-5 py-1 rounded-3xl hover:bg-blue-500" style={{ border: "2px solid white" }}>
            {props.children}
        </Link>
    );
}