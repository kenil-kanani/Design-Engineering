import React, { useState } from 'react'
import './Contact.css'

const Contact = () => {

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    return (
        <div className='w-screen h-screen flex flex-col items-center justify-center'>
            <h1 className='text-center text-3xl mb-6'>Message Directly To Kenil ❤️</h1>

            <form className='form'>
                <div className='flex-column'>
                    <label>Title</label>
                </div>
                <div className='inputForm'>
                    <input
                        placeholder='Title...'
                        className='input'
                        type='text'
                        value={title}
                        onChange={(event) => setTitle(event.target.value)}
                    />
                </div>

                <div className='flex-column'>
                    <label>Description</label>
                </div>
                <div className='border textarea_contact'>
                    <textarea
                        className='input  p-1'
                        placeholder='Description...'
                        type='text'
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </div>
                <button className='button-submit' onClick={(event) => {
                    event.preventDefault();
                }}>Submit</button>
            </form>
        </div>
    )
}

export default Contact
