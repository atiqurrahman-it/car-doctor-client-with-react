import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      })
      .catch((err) => console.error(err));
  }, []);

  console.log(services);
  return (
    <div className="mt-4">
      <div className="space-y-5 text-center">
        <h1 className="text-2xl text-orange-600 font-bold">Service</h1>
        <h1 className="text-5xl text-black font-bold">Our Service Area</h1>
        <p className="text-[#737373]">
          the majority have suffered alteration in some form, by injected
          humour, or randomised <br /> words which do not look even slightly
          believable.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6  pb-10">
        {services.map((service) => (
          <ServiceCard service={service} key={service._id}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default Services;
