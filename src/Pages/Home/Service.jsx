import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Service = () => {
    const [service, setService] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:5000/services")
        .then(res => res.json())
        .then(data => setService(data))
    },[])
  return (
    <div className="container m-auto">
      <div className="text-center">
        <h1 className="text-[20px] font-bold">Service</h1>
        <h1 className="text-5xl font-bold w-[600px] leading-snug m-auto">
          Our Service
        </h1>
        <p className="max-w-[600px] m-auto">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          quibusdam distinctio. Sint, amet? Sint, porro?
        </p>
      </div>
      <div className="grid grid-cols-3 gap-y-10 mt-10">
        
        {
            service.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
        }
      </div>
    </div>
  );
};

export default Service;
