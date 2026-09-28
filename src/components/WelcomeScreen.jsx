import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeScreen = () => {


    return (
        <div className=' welcomescreen h-[100vh] bg-green-500 flex flex-col items-center justify-between py-30'>
            <div className=''>
                <h1 className='text-[4rem] font-bold'>SolaC</h1>
            </div>

            <div>
                <Link to='/loadaudit'>
                <button className=' py-4 px-20 rounded-full text-[1.1rem] text-white font-bold bg-orange-500 shadow-md cursor-pointer hover:bg-transparent hover:border'>Access</button>
            
                </Link>
                
            
            </div>


        </div>
    )
}

export default WelcomeScreen
