import "../css/Section.css";

const Section = () => {
  return (
    <>
      <div className="section-container">
        <div className="text-[9rem] text-center">
          <h1 className="text-black font-light">
            <span>WE ARE A LEADING</span> <span>REAL ESTATE</span>{" "}
            <span className="font-semibold">AGENCY</span>
          </h1>
        </div>
      </div>

      <footer className="footer-container">
        <div >
          <p>Outdoor Activities</p>
        </div>

        <div >
          <img src="./img/Black.png" alt="Badge" />
          <p>Exclusive Amenities</p>
        </div>

        <div >
          <img src="./img/Blue.png" alt="Bed" />
          <p>Front Beack 3 Bedrooms</p>
        </div>

        <div >
          <img src="./img/Brown.png" alt="Bath Tub" />
          <p>Jacuzzi 3 Bathrooms</p>
        </div>
      </footer>
    </>
  );
};

export default Section;
