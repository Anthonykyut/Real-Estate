import Card from "./Card";

import proj1one from "../assets/proj1one.avif";
import proj1two from "../assets/proj1two.avif";
import proj1three from "../assets/proj1three.avif";

import proj2one from "../assets/proj2one.avif";
import proj2two from "../assets/proj2two.avif";
import proj2three from "../assets/proj2three.avif";

import proj3one from "../assets/proj3one.avif";
import proj3two from "../assets/proj3two.avif";
import proj3three from "../assets/proj3three.avif";

import proj4one from "../assets/proj4one.avif";
import proj4two from "../assets/proj4two.jpeg";
import proj4three from "../assets/proj4three.jpeg";

import proj5one from "../assets/proj5one.avif"
import proj5two from "../assets/proj5two.jpeg"
import proj5three from "../assets/proj5three.avif"

const cardData = [
  {
    images: [proj1one, proj1two, proj1three],
    title: "Lumpia Shanghai Resort",
    location: "Cabanatuan, Philippines",
    price: "₱50,000.00 / Monthly",
  },
  {
    images: [proj2one, proj2two, proj2three],
    title: "Baguio Vacation Home",
    location: "Baguio, Philippines",
    price: "₱30,000.00 / Monthly",
  },

  {
    images: [proj3one, proj3two, proj3three],
    title: "Baguio Vacation Home",
    location: "Cavite, Philippines",
    price: "₱10,000.00 / Monthly",
  },

  {
    images: [proj4one, proj4two, proj4three],
    title: "Baguio Vacation Home",
    location: "Manila, Philippines",
    price: "₱60,000.00 / Monthly",
  },

  {
    images: [proj5one, proj5two, proj5three],
    title: "Baguio Vacation Home",
    location: "Tokyo, Philippines",
    price: "₱20,000.00 / Monthly",
  },

  {
    images: [proj1one, proj1two, proj1three],
    title: "Baguio Vacation Home",
    location: "Gapan, Philippines",
    price: "₱15,000.00 / Monthly",
  },



  
];





const CardContainer = () => {
  return (
    <div className="flex flex-wrap gap-6 items-center justify-center p-3 md:p-5" >
      {cardData.map((data, index) => (
        <Card key={index} {...data} />
      ))}
    </div>
  );
};

export default CardContainer;
