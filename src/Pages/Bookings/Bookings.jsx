import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import BookingRow from "./BookingRow";
import axios from "axios";

const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);
  const url = `http://localhost:5000/bookings?email=${user.email}`;
  useEffect(() => {
    axios.get(url, {withCredentials: true})
    .then(res => {
      setBookings(res.data)
    })
    // fetch(url)
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setBookings(data);
    //   });
  }, [url]);
  const handleDelete = (id) => {
    const proceed = confirm("Are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/bookings/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = bookings.filter(booking => booking._id !== id)
            setBookings(remaining)
          }
        });
    }
  };

  const handleBookingConfirm = id => {
    fetch(`http://localhost:5000/bookings/${id}`,{
        method: 'PATCH',
        headers: {
            'content-type':'application/json'
        },
        body: JSON.stringify({status: 'confirm'})
    })
    .then(res => res.json())
    .then(data => {
        if(data.modifiedCount > 0){
            const remaining = bookings.filter(booking => booking._id !== id)
            const updated = bookings.find(booking => booking._id === id)
            updated.status = 'confirm'
            const newBookings = [updated, ...remaining]
            setBookings(newBookings);
        }
    })
  }
  return (
    <div className="container m-auto">
      <h1 className="text-[30px]">your bookings : {bookings.length}</h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingRow handleBookingConfirm={handleBookingConfirm} handleDelete={handleDelete} key={booking._id} booking={booking}></BookingRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Bookings;
