import "../css/Selection.css";
import "./SelectionCard";
import SelectionCard from "./SelectionCard";

const Selection = () => {
  const selection = [
    {
      id: 1,
      image: "./img/Rectangle 30.png",
      title: "Forest Retreat",
      description:
        "Are you looking to find your dream home or invest in a lucrative property.",
      book: "Book Now",
      icon: "./img/verticalarrow01.svg.png",
    },
    {
      id: 2,
      image: "./img/Rectangle 31.png",
      title: "Woodland Retreat",
      description:
        "When it comes to selling your property, our team is equipped with the expertise.",

      book: "Book Now",
      icon: "./img/verticalarrow01.svg.png",
    },
    {
        id: 3,
        image: "./img/Rectangle 32.png",
        title: "Harmony House",
        description: "Our agents will guide you through the entire buying process, from property ",
        book: "Book Now",
        icon: "./img/verticalarrow01.svg.png"
    }, 
    {
        id: 4,
        image: "./img/Rectangle 33.jpg",
        title: "Aliva Priva Jardin",
        description: "If you're in need of rental services, our team can assist you in finding suitable ",
        book: "Book Now",
        icon: "./img/verticalarrow01.svg.png"
    }
  ];

  const mapOfSelection = selection.map((select) => (
    <SelectionCard
      key={select.id}
      image={select.image}
      title={select.title}
      description={select.description}
      book={select.book}
      icon={select.icon}
    />
  ));

  return (
    <>
      <div className="selection-container">
        <div>
          <div>
            <img src="./img/arrow01.svg.png" alt="" /> <p>DREAMER HOME</p>
          </div>
        </div>
        <h1>
          If You're In Need Of <span className="purple">Rental</span> Services
        </h1>
      </div>

      <div className="props-container">{mapOfSelection}</div>
    </>
  );
};

export default Selection;
