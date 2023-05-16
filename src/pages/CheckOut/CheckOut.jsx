import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProviders";

import Swal from "sweetalert2";

const CheckOut = () => {
  const service = useLoaderData();
  const { user } = useContext(AuthContext);
  const { _id, title, price, img } = service;

  const handelOrderConfirm = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const date = form.date.value;
    const email = user?.email;

    const order = {
      customerName: name,
      date,
      price,
      img,
      service:title,
      service_id: _id,
      email,
    };

    fetch(`http://localhost:5000/bookings`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Your service  book successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          form.reset()

          // Swal.fire({
          //   title: "success!",
          //   text: "Services added successfully ",
          //   icon: "success",
          //   confirmButtonText: "ok",
          // });
        }
      });
  };
  return (
    <div className="bg-[#F3F3F3]">
      <h1>book service : {title}</h1>
      <form onSubmit={handelOrderConfirm} className="m-10 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input
              type="text"
              name="name"
              defaultValue={user?.displayName}
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Date</span>
            </label>
            <input
              type="date"
              name="date"
              required
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="email"
              name="email"
              defaultValue={user?.email}
              className="input input-bordered"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Deu Balance</span>
            </label>
            <input
              type="text"
              name="price"
              required
              defaultValue={"$" + price}
              className="input input-bordered"
            />
          </div>
        </div>
        <div className="form-control py-6">
          <input
            className="btn btn-primary btn-block"
            type="submit"
            value="order confirm "
          />
        </div>
      </form>
    </div>
  );
};

export default CheckOut;
