import "../css/SelectionCard.css";

type SelectionCardProps = {
  image: string;
  title: string;
  description: string;
  book: string;
  icon: string;
};

const SelectionCard = (props: SelectionCardProps) => {
  return (
    <>
      <div className="selectioncard-container">
        <img src={props.image} alt=""  className="image"/>
        <div className="feature-container">
          <h1>{props.title}</h1>
          <p>{props.description}</p>
          <div className="clickable">
            <h2>{props.book}</h2>
            <img src={props.icon} alt=""/>
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectionCard;
