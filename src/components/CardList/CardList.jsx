import Card from "../Card/Card";
import './CardList.css'

const CardList = (props) => {
  return (
    <ul>
      {props.onAddCard.map(({ id, value, age }, key) => {
        return <Card id={id} value={value} age={age} key={key} />;
      })}
    </ul>
  );
};

export default CardList;
