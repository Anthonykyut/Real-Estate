import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";

import "../styles/swiper-custom.css";

interface CardProps {
  images: string[]; // Array of image URLs
  title: string;
  location: string;
  price: string;
}

const Card: React.FC<CardProps> = ({ images, title, location, price }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm cursor-pointer relative">
      <figure className="w-full relative">
        <Swiper
          modules={[Pagination, Navigation]}
          pagination={{ clickable: true }}
          navigation
          loop
          className="w-full h-64"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <img
                src={src}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </figure>

      {/* Heart Icon */}
      <div className="bg-white h-14 w-14 rounded-full absolute z-10 right-10 bottom-42 shadow-md p-3 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="23"
          height="23"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-heart"
        >
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </div>

      {/* Card Details */}
      <div className="card-body">
        <h2 className="text-lg font-semibold">{title}</h2>
        <div className="flex items-center space-x-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-map-pin"
          >
            <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <h2 className="text-md">{location}</h2>
        </div>

        <h3 className="text-lg text-red-600">{price} </h3> 
        <a href="#" className="p-3 bg-gray-900 text-white text-center rounded-md "> View Details </a>
        
      </div>
    </div>
  );
};

export default Card;
