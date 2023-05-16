const BookingsRow = ({booking}) => {
    console.log(booking)
    const {img,date,price,service}=booking
  return (
    <>
      <tr>
        <th>
          <label>
            <input type="checkbox" className="checkbox" />
          </label>
        </th>

        <td>
          <div className="avatar">
            <div className="rounded w-24 h-24">
              <img src={img} alt="Avatar Tailwind CSS Component"/>
            </div>
          </div>
        </td>

        <td>   {service &&  <> {service} </>} </td>
        <td> $ {price} </td>
        <td>{date}</td>

        <th>
          <button className="btn btn-warning">pending</button>
        </th>
      </tr>
    </>
  );
};

export default BookingsRow;
