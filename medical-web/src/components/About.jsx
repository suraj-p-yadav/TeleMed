import React from 'react'
import img from '../assets/about.jpg'

const About=() => {
    return(
  
    <div className=" min-h-screen flex flex-col lg:flex-row justify-between items-center lg:px-32 px-5 pt-24 lg:pt-16 gap-5">
      <div className=" w-full lg:w-3/4 space-y-4">
        <h1 className=" text-4xl font-semibold text-center lg:text-start">About Us</h1>
        <p className=" text-justify lg:text-start">
         Welcome to TeleMed+, where healthcare meets convenience. Our telemedicine platform allows you to connect with trusted doctors from the comfort of your home, anytime and anywhere. Whether it’s a routine consultation, follow-up care, or quick medical advice, we make quality healthcare more accessible, affordable, and stress-free. With secure technology and dedicated medical professionals, we bring hospitals closer to you with just a click.
        </p>
        <p className="text-justify lg:text-start">
          We aim to make healthcare accessible, affordable, and convenient for everyone — whether you live in a city or a remote village. With a team of experienced healthcare professionals and advanced digital tools, we bring hospitals closer to you, one click at a time.
        </p>
      </div>
      <div className=" w-full lg:w-3/4">
        <img className=" rounded-lg" src={img} alt="img" />
      </div>
    </div>
    )
}

export default About