import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdBloodtype, MdHealthAndSafety, MdVaccines } from "react-icons/md";
import { FaBaby, FaBrain, FaCapsules, FaEye, FaHeartbeat, FaHospital, FaJoint, FaLungs, FaTeeth, FaUser } from "react-icons/fa";
import { AiFillAlert } from "react-icons/ai";

const Services = () => {
    const icon1 = (
        <RiMicroscopeLine size={35} className=" text-backgroundColor" />
    );
    const icon2 = (
        <MdHealthAndSafety size={35} className=" text-backgroundColor" />
    );
    const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;
    const icon4 = <MdBloodtype size={35} className=" text-backgroundColor" />;
    const icon5 = <FaEye size={35} className=" text-backgroundColor" />;
    const icon6 = <FaTeeth size={35} className=" text-backgroundColor" />;
    const icon7 = <FaCapsules size={35} className=" text-backgroundColor" />;
    const icon8 = <MdVaccines size={35} className=" text-backgroundColor" />;
    const icon9 = <FaJoint size={35} className=" text-backgroundColor" />;
    const icon10 = <AiFillAlert size={35} className=" text-backgroundColor" />;
    const icon11 = <FaBrain size={35} className=" text-backgroundColor" />;
    const icon12 = <FaLungs size={35} className=" text-backgroundColor" />;
    const icon13 = <FaBaby size={35} className=" text-backgroundColor" />;
    const icon14 = <FaHospital size={35} className=" text-backgroundColor" />;

    return (
        <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
            <div className=" flex flex-col items-center lg:flex-row justify-between">
                <div>
                    <h1 className=" text-4xl font-semibold text-center lg:text-start">
                        Our Services
                    </h1>
                    <p className=" mt-2 text-center lg:text-start">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus,
                        quidem.
                    </p>
                </div>
                <div className=" mt-4 lg:mt-0">
                    <Button title="See Services" />
                </div>
            </div>
            <div className=" flex flex-col lg:flex-row gap-5 pt-14">
                <ServicesCard icon={icon1} title="Lab Test" />
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon2}
                    </div>
                    <h1 className=" font-semibold text-lg">Health Check</h1>
                    <p>
                        Stay ahead with regular health check-ups tailored to your needs.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <ServicesCard icon={icon3} title="Heart Health" />
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon4}
                    </div>
                    <h1 className=" font-semibold text-lg">Blood Test</h1>
                    <p>
                        Get blood tests done at home with quick, reliable results.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon5}
                    </div>
                    <h1 className=" font-semibold text-lg">Eye Test</h1>
                    <p>
                        Keep your vision clear with expert eye tests at your convenience.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon6}
                    </div>
                    <h1 className=" font-semibold text-lg">Dental CheckUp</h1>
                    <p>
                        Maintain a healthy smile with easy and expert dental checkups.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon7}
                    </div>
                    <h1 className=" font-semibold text-lg">Medicines</h1>
                    <p>
                        Order medicines online and get them delivered to your doorstep quickly.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon8}
                    </div>
                    <h1 className=" font-semibold text-lg">Vaccine</h1>
                    <p>
                        Stay protected with safe and timely vaccinations at your convenience.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon9}
                    </div>
                    <h1 className=" font-semibold text-lg">Joint Pain</h1>
                    <p>
                        Get expert care and relief solutions for joint pain from the comfort of home.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon10}
                    </div>
                    <h1 className=" font-semibold text-lg">Emergency</h1>
                    <p>
                        Immediate medical support when you need it most, available 24/7.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon11}
                    </div>
                    <h1 className=" font-semibold text-lg">Mental Health</h1>
                    <p>
                        Confidential and compassionate mental health support, anytime you need it.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon12}
                    </div>
                    <h1 className=" font-semibold text-lg">Asthma</h1>
                    <p>
                        Breathe easier with expert asthma care and ongoing support at home.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                <div className=" group flex flex-col items-center text-center gap-2 w-full lg:w-1/3 p-5 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] rounded-lg cursor-pointer lg:hover:-translate-y-6 transition duration-300 ease-in-out">
                    <div className=" bg-[#d5f2ec] p-3 rounded-full transition-colors duration-300 ease-in-out group-hover:bg-[#ade9dc]">
                        {icon13}
                    </div>
                    <h1 className=" font-semibold text-lg">Pregnancy</h1>
                    <p>
                        Safe and supportive pregnancy care with expert guidance at every stage.
                    </p>

                    <h3 className=" text-backgroundColor cursor-pointer hover:text-[#ade9dc] transition duration-300 ease-in-out">
                        Learn more
                    </h3>
                </div>
                
            </div>
        </div>
    );
};

export default Services