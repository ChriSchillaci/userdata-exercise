import './Card.css'

const Card = (props) => {
  return (
    <li key={props.id}>
      <p>UserName: {props.value}</p>
      <p>Age: {props.age}</p>
    </li>
  );
};

export default Card;
