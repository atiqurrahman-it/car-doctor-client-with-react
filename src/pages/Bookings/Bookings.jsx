import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import BookingsRow from "./BookingsRow";

const Bookings = () => {
    const {user}=useContext(AuthContext)
    const [bookings,setBookings]=useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
            setBookings(data)
            console.log(data)
        })
        .catch(error=>console.log(error))
    },[])
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
        <th>Name</th>
        <th>Price</th>
        <th> Date</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
        {
            bookings.map(booking=><BookingsRow booking={booking} key={booking._id}></BookingsRow>)
        }
     
    </tbody>
    {/* foot */}
  
    
  </table>
</div>
        </div>
    );
};

export default Bookings;