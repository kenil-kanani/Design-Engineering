import React from 'react'
import './BackButton.css'
import { Link } from 'react-router-dom'
import { IoMdArrowRoundBack } from "react-icons/io";

const BackButton = ({ backPath }) => {
    return (
        <Link to={backPath}>
            <button className='back-btn flex items-center gap-2'>
                <IoMdArrowRoundBack />
                <b>Back</b>
            </button>
        </Link >
    )
}

export default BackButton
