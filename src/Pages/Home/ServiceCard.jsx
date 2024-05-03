import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({service}) => {
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img className='h-[200px] w-full object-cover'
              src={service.img}
              alt="image"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{service.title}</h2>
            <h2 className="card-title">$ {service.price}</h2>
            <div className="card-actions justify-end">
              <Link to={`/checkout/${service._id}`}><button className="btn btn-primary">Book Now</button></Link>
            </div>
          </div>
        </div>
    );
};

export default ServiceCard;