import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
  const { _id,title, img, price } = service;
  return (
    <div className="card w-2/3 md:w-full bg-base-100 mx-auto hover:shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body ml-3 bottom-0">
        <h2 className="card-title">{title}</h2>
        <div className="flex justify-between items-center text-warning ">
          <p className='text-2xl'>Price : $ {price}</p>
          <Link to={`/check-out/${_id}`}><FaArrowRight /></Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
