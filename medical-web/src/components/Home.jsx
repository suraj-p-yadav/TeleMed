import React from "react";
import Button from "../layouts/Button";

const Home = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 text-white bg-[url('assets/doctor.jpg')] bg-no-repeat bg-cover opacity-90">
      <div className="text-[black] w-full lg:w-4/5 space-y-5 mt-10">
        <h1 className="text-[black] text-5xl font-bold leading-tight">
          Bringing healthcare closer to you — anytime, anywhere.
        </h1>
        <p>
          we believe that quality healthcare should not be limited by distance. Our telemedicine platform connects patients with trusted doctors through secure video consultations, ensuring timely medical advice and care from the comfort of home.
        </p>

        <Button title="See Services" />
      </div>
    </div>
  );
};

export default Home;