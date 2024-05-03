import React from 'react';
import Tilt from 'react-parallax-tilt';
import videoBg from '../../assets/video.mp4'
import { Link } from 'react-router-dom';
import '../../index.css'

function Login() {
  return (
    <div className="h-full flex justify-center items-center">
      <video className="absolute object-cover w-full h-[122%]" autoPlay muted loop>
        <source src={videoBg} type="video/mp4" />
        {/* Add additional <source> elements for different video formats if necessary */}
        Your browser does not support the video tag.
      </video>
      
      <Tilt>
        <div className="mt-12 container h-1/2 w-96 bg-white bg-opacity-10 rounded-2xl shadow-5xl relative z-2 border border-opacity-30 border-r-0 border-b-0 backdrop-filter backdrop-blur-sm">
          <form className='h-full flex flex-col justify-evenly items-center'>
            <div className='text-white font-poppins text-3xl tracking-widest rounded-md vt323-regular'>Sign up form</div>
           
            <input type="text" placeholder='Username' className='input-text rounded-md p-2 vt323-regular my-2' style={{ fontSize: '1.5rem' }} />
            <input type="password" placeholder='Password' className='input-text rounded-md p-2 vt323-regular my-2' style={{ fontSize: '1.5rem' }} />
            <div className="px-20 flex justify-between w-full">
            <Link to="/sparkles">
            <button className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 vt323-regular my-2' style={{ fontSize: '1.5rem' }} >
                  Submit
                </button>
                </Link>
              <Link to="/signup">
                <button className='cursor-pointer font-poppins rounded-full px-5 py-1 bg-white bg-opacity-50 hover:bg-white hover:bg-opacity-80 vt323-regular my-2' style={{ fontSize: '1.5rem' }} >
                  Sign Up
                </button>
              </Link>
            </div>
          </form>
        </div>
      </Tilt>
    </div>
  );
}

export default Login;
