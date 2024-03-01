import React from 'react'
import './Home.css'
import { Link } from 'react-router-dom'


const Home = () => {

    return (
        <div className='w-screen h-screen'>
            <div className='w-screen flex flex-col items-center bg-[#dde6ed]'>
                <h1 className='text-[36px] mt-[60px] font-sans font-bold text-[#333333]' >Design Engineering Canvas & Report Builder</h1>
                <h1 className='text-[28px] font-sans font-bold mt-[10px]'>Single Location for Lots of Problems😠</h1>
                <h1 className='text-[18px] font-sans text-[#555555] mt-[10px]'>Transform your ideas💡 into actionable plans with our easy to use canvas & report builder.</h1>
                <Link to={'/myprojects'}><button className='py-[10px] px-[20px] mt-[30px] mb-[70px] text-white rounded-lg bg-[#1a1a1a] hover:bg-[#463d3d] cursor-pointer'>Get Started</button></Link>
            </div>
            <div className='w-screen flex flex-col bg-[#9db1bf]'>
                <h2 className='font-sans font-bold text-[28px] pl-[40px] mt-[40px]'>About</h2>
                <p className='font-sans text-[16px] px-[40px] mt-[10px] text-justify'>As we all know, design engineering is one of many institutions' highly distinctive and pioneering initiatives based on widely acknowledged and used approaches by designers and engineers known as "Design Thinking." One of the primary goals of this initiative is to promote the Design Thinking mindset in future engineers while also incorporating the technique into basic disciplines.
                </p>
                <p className='font-sans text-[16px] px-[40px] mt-[10px] text-justify'>For that I have developed a canvas and report builder. Discover how it makes the process of thinking, organising, and sharing design thoughts easier. It provides a systematic framework for capturing key components of your projects and generating reports that follow  the criteria and format.
                </p>
                <div className='w-screen flex justify-center gap-4 py-[40px]'>
                    <div className='h-[7px] w-[7px] rounded-[50%] bg-black'></div>
                    <div className='h-[7px] w-[7px] rounded-[50%] bg-black'></div>
                    <div className='h-[7px] w-[7px] rounded-[50%] bg-black'></div>
                    <div className='h-[7px] w-[7px] rounded-[50%] bg-black'></div>
                    <div className='h-[7px] w-[7px] rounded-[50%] bg-black'></div>
                </div>
                <h3 className='font-sans font-bold text-[24px] pl-[40px] mt-[20px]'>Intuitive Canvas Editor</h3>
                <p className='font-sans text-[16px] pl-[40px]'>Create and customize your canvas with an easy-to-use interface.</p>
                <h3 className='font-sans font-bold text-[24px] pl-[40px] mt-[20px]'>Report Builder</h3>
                <p className='font-sans text-[16px] pl-[40px]'>Just enter the required data and wait for magic.</p>
                <h3 className='font-sans font-bold text-[24px] pl-[40px] mt-[20px]'>Export and Share</h3>
                <p className='font-sans text-[16px] pl-[40px] mb-[60px]'>Export your canvas as a PDF & JPG or share it with others to gather feedback.</p>
            </div>
            <div className='w-screen text-center text-[16px] bg-[#1a1a1a] text-white py-[15px]'>
                © 2024 Design Engineering Canvas & Report Builder. All rights reserved.
            </div>
        </div>
    )
}

export default Home
