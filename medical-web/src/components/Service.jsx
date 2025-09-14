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
                        Comprehensive healthcare services — from online consultations to lab tests, medicines, and specialist care — all at your fingertips.
                    </p>
                </div>
                <div className=" mt-4 lg:mt-0">
                    <Button title="See Services" />
                </div>
            </div>
            <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
                <ServicesCard icon={icon1} title="Lab Test" discription="Book lab tests from home with fast reports and trusted accuracy." />
                <ServicesCard icon={icon2} title="Health Check" discription="Stay ahead with regular health check-ups tailored to your needs." />
                <ServicesCard icon={icon3} title="Heart Health" discription="Protect your heart with expert care, regular check-ups, and timely guidance." />
                <ServicesCard icon={icon4} title="Blood Test" discription="Get blood tests done at home with quick, reliable results." />
                <ServicesCard icon={icon5} title="Eye Test" discription="Keep your vision clear with expert eye tests at your convenience." />
                <ServicesCard icon={icon6} title="Dental CheckUp" discription="Maintain a healthy smile with easy and expert dental checkups." />
                <ServicesCard icon={icon7} title="Medicines" discription="Order medicines online and get them delivered to your doorstep quickly." />
                <ServicesCard icon={icon8} title="Vaccine" discription="Stay protected with safe and timely vaccinations at your convenience." />
                <ServicesCard icon={icon9} title="Joint Pain" discription="Get expert care and relief solutions for joint pain from the comfort of home." />
                <ServicesCard icon={icon10} title="Emergency" discription="Immediate medical support when you need it most, available 24/7." />
                <ServicesCard icon={icon11} title="Mental Health" discription="Confidential and compassionate mental health support, anytime you need it." />
                <ServicesCard icon={icon12} title="Asthma" discription="Breathe easier with expert asthma care and ongoing support at home." />
                <ServicesCard icon={icon13} title="Pregnancy" discription="Safe and supportive pregnancy care with expert guidance at every stage." />              
            </div>
            </div>
        </div>
    );
};

export default Services