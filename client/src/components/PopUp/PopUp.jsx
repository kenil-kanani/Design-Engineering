import React from 'react'

const PopUp = () => {
    return (
        <div className='w-full bg-[#1A1A1A] flex flex-col justify-center items-center py-4'>
            <div className="border text-card-foreground w-full max-w-lg mx-auto bg-white dark:bg-gray-900 shadow-lg rounded-lg p-6" data-v0-t="card">
                <div className="flex flex-col space-y-1.5 p-6">
                    <h3 className="whitespace-nowrap tracking-tight text-xl font-bold text-gray-800 dark:text-gray-200">
                        Sign Up with your University Email
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">If you didn't receive the email, please check your spam Or </p>

                </div>
                <div className="p-6 space-y-4">
                    <ul className="list-disc pl-4 space-y-2">
                        <li className="text-gray-800 dark:text-gray-200">You can directly message me on <a className='text-blue-500' target="_blank" href='https://www.linkedin.com/in/kenil-kanani-5ab300219/' >LinkedIn</a> or <a className='text-blue-500' target="_blank" href='https://twitter.com/kenil_kanani_16' >Twitter</a></li>
                        <li className="text-gray-800 dark:text-gray-200">Send me an email to <a className='text-blue-500' target="_blank" href='mailto:kenilkanani16@icloud.com'>kenilkanani16@icloud.com</a></li>
                        <li className="text-gray-800 dark:text-gray-200">WhatsApp me on <span className='text-blue-500' >9726914606</span></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default PopUp
