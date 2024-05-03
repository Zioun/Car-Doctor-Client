import React from 'react';

const BookingRow = ({booking, handleDelete, handleBookingConfirm}) => {
    const {_id, service, img, date, price, status} = booking;
    
    return (
        <>
            <tr>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={img}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{service}</div>
                  </div>
                </div>
              </td>
              <td>
                {date}
              </td>
              <td>$ {price}</td>
              <th>
                {status === 'confirm'? <button className="btn btn-success btn-xs text-white cursor-not-allowed">Confirmed</button> : <button onClick={() => handleBookingConfirm(_id)} className="btn btn-neutral btn-xs">Confirm</button>}
                
                <button onClick={() => handleDelete(_id)} className="btn btn-error text-white btn-xs">Delete</button>
              </th>
            </tr>
        </>
    );
};

export default BookingRow;