import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingsRow from "./BookingsRow";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const Bookings = () => {
  const { user } = useContext(AuthContext);
  const [bookings, setBookings] = useState([]);

  const  navigate=useNavigate()


  // function 
  const handelBookingStatus = (id) => {
    fetch(`http://localhost:5000/bookings/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ status: "confirm" }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          const remaining = bookings.filter((booking) => booking._id !== id);
          const update = bookings.find((booking) => booking._id === id);
          update.status='confirm'
          const newBooking = [update, ...remaining];
          setBookings(newBooking);
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Booking Status update ",
            showConfirmButton: false,
            timer: 1500,
          });

        }
      })
      .catch((error) => console.log(error));
  };

  const url=`http://localhost:5000/bookings?email=${user?.email}`
  useEffect(() => {
    fetch(url,{
      // verify er jonno  
      method:"GET",
      headers:{
        authorization:`Bearer ${localStorage.getItem('car-doctors-access-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        // token validation and token na thakle 
        if(!data.error){
          setBookings(data);
        }
        else{
          //logout then home page redirect korte hobe 
          navigate('/')
        }

        // console.log(data)
      })
      .catch((error) => console.log(error));
  }, [url]);

  return (
    <div>
      <h1 className="text-3xl font-bold">your Bookings : {bookings.length}</h1>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Image</th>
              <th>Service</th>
              <th>Price</th>
              <th> Date</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking) => (
              <BookingsRow
                handelBookingStatus={handelBookingStatus}
                bookings={bookings}
                setBookings={setBookings}
                booking={booking}
                key={booking._id}
              ></BookingsRow>
            ))}
          </tbody>
          {/* foot */}
        </table>
      </div>
    </div>
  );
};

export default Bookings;
