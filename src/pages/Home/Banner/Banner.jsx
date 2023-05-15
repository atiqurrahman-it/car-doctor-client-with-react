import img1 from "../../../assets/images//banner/1.jpg";
import img2 from "../../../assets/images//banner/2.jpg";
import img3 from "../../../assets/images//banner/3.jpg";
import img4 from "../../../assets/images//banner/4.jpg";

const Banner = () => {
  const messageCard = (
    <>
      <div className="space-y-7 text-white pl-12 w-1/2">
        <h1 className="text-6xl font-bold">
          Affordable Price For Car Servicing{" "}
        </h1>
        <p>
          There are many variations of passages of available, but the majority
          have suffered alteration in some form{" "}
        </p>
        <div>
          <button className="btn btn-warning mr-5">Latest Project</button>
          <button className="btn btn-outline btn-warning">Discover More</button>
        </div>
      </div>
    </>
  );
  return (
    <div className="carousel w-full md:h-[550px] rounded-xl">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full  rounded-xl" />

        <div className="absolute  rounded-xl h-full flex items-center left-0 top-0 gap-5 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          {messageCard}
        </div>

        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full  rounded-xl" />
        <div className="absolute  h-full flex items-center left-0 top-0 gap-5 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          {messageCard}
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full  rounded-xl"  />
        <div className="absolute  h-full flex items-center left-0 top-0 gap-5 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          {messageCard}
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={img4} className="w-full  rounded-xl" />
        <div className="absolute  h-full flex items-center left-0 top-0 gap-5 transform  bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
          {messageCard}
        </div>
        <div className="absolute flex justify-end gap-5 transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
