import Swal from "sweetalert2";

const BookingsRow = ({ booking,bookings,setBookings,handelBookingStatus }) => {
  const { _id, img, date, price, service,status } = booking;

  const handelDeleteBooking = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {

        fetch(`http://localhost:5000/bookings/${id}`,{
            method:"DELETE"
        })
        .then(res=>res.json())
        .then(data=>{
            if(data.deletedCount >0){
                const remainingBooking=bookings.filter(book=>book._id!==id)
                setBookings(remainingBooking)

                Swal.fire("Deleted!", "Your file has been deleted.", "success");
            }
        })
        .catch(error=>console.log(error))


      }
    });
  };
  return (
    <>
      <tr>
        <th>
          <button
            onClick={() => handelDeleteBooking(_id)}
            className="btn btn-sm btn-circle"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </th>

        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
        </td>

        <td> {service && <> {service} </>} </td>
        <td> $ {price} </td>
        <td>{date}</td>

        <th>
            {
                status=='confirm' ?   <button className="btn btn-info">confirm </button> :
               <button onClick={()=>handelBookingStatus(_id)} className="btn btn-warning">pending</button>
            }
        </th>
      </tr>
    </>
  );
};

export default BookingsRow;
