import "../css/Assist.css";


const Assist = () => {
  return (
    <>
      <div className="assist-container">
        <div className="side-left">
          <div>
            <img src="./img/arrow01.svg.png" alt="arrow" />
            <p> SOLUTIONS</p>
          </div>
          <h1 className="description">
            We Assist Buyers In Finding Their
            <span> Dream Homes</span>
          </h1>

          <div className="free-start">
            <span className="black">
              <h2>Get Started Free</h2>
            </span>
            <p>
              Our agents will guide you throught the entire buying process, from
              property.
            </p>
          </div>
        </div>

        <div className="assist-right">
          <img src="./img/Mask group.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default Assist;
