import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const CheckOut = () => {
  const service = useLoaderData();
  const { title, _id, price, img } = service;
  const {user} = useContext(AuthContext)

  const handleBookService = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value; 
    const date = form.date.value; 
    const email = form.email.value; 
    const order = {
        customerName : name,
        email,
        date,
        img,
        service: title,
        serviceId: _id,
        price: price
    }
    console.log(order);
    fetch('http://localhost:5000/bookings',{
        method: 'Post',
        headers:{
            'content-type':'application/json'
        },
        body: JSON.stringify(order)
    })
    .then(res => res.json())
    .then(data => {
        console.log(data)
        if(data.insertedId){
            alert('service book successfully')
        }
    })
  }
  return (
    <div>
      <h1>Book Service : {title}</h1>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="card shrink-0 w-full shadow-2xl bg-base-100">
            <form onSubmit={handleBookService} className="card-body">
              <div className="flex gap-5">
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="name"
                      placeholder="name"
                      className="input input-bordered"
                      defaultValue={user?.displayName}
                      name="name"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Date</span>
                    </label>
                    <input
                      type="date"
                      placeholder="date"
                      className="input input-bordered"
                      name="date"
                    />
                  </div>
                </div>
                <div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="email"
                      placeholder="email"
                      className="input input-bordered"
                      defaultValue={user?.email}
                      name="email"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Due Amount</span>
                    </label>
                    <input
                      type="text"
                      placeholder="Due Amount"
                      className="input input-bordered"
                      defaultValue={'$ ' + price}
                      name="price"
                    />
                  </div>
                </div>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Order Confirm</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
