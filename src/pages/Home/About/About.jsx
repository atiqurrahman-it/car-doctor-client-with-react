import person from "../../../assets/images//about_us/person.jpg"
import parts from "../../../assets/images//about_us/parts.jpg"
const About = () => {
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:w-1/2 relative mb-10">
           <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
           <img src={parts} className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold  text-[#151515]">We are qualified & of experience in this field</h1>
          <p className="py-6 text-[#737373]">
          There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. 
          </p>
          <p className="py-6 text-[#737373]">
          the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.           </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
