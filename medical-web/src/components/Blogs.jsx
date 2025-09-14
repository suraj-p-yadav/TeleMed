import React from 'react'
import Button from "../layouts/Button";
import BlogCard from "../layouts/BlogCard";
import img1 from "../assets/blog1.jpg";
import img2 from "../assets/blog2.jpg";
import img3 from "../assets/blog3.jpg";
import img4 from "../assets/blog4.jpg";
import img5 from "../assets/blog5.jpg";
import img6 from "../assets/blog6.jpg";


const Blogs = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Latest Post
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            TeleMed+ is the use of technology to connect patients with doctors remotely for quick and convenient healthcare.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="Our Articles" />
        </div>
      </div>
      <div className=" my-8">
        <div className=" flex flex-wrap justify-center gap-5">
          <BlogCard img={img1} headlines="Future of Healthcare" Description="Learn how online consultations are changing the way patients access doctors worldwide."/>
          <BlogCard img={img2} headlines="Lab Tests at Home: Convenience with Accuracy" Description="Explore how home sample collection and fast reports make healthcare stress-free."/>
          <BlogCard img={img3} headlines="Mental Health Support Anytime, Anywhere" Description="Understand how telemedicine provides confidential counseling and therapy on demand."/>
          <BlogCard img={img4} headlines="Telemedicine in Rural Areas: Bridging the Gap" Description="See how digital healthcare is reaching villages and remote communities effectively."/>
          <BlogCard img={img5} headlines="Benefits of Online Doctor Consultations" Description="From saving time to easy access, discover why telemedicine is a smart choice."/>
          <BlogCard img={img6} headlines="Managing Chronic Illness with Telehealth" Description="Find out how patients with long-term conditions get better care through digital support."/>
        </div>
      </div>
    </div>
  )
}

export default Blogs