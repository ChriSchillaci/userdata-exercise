import { useState } from "react";
import CardList from "../CardList/CardList";
import Button from "../Button/Button";
import './UserData.css'

const UserData = ({ onSetModal }) => {
  const [userNameSelected, setUserNameSelected] = useState("");
  const [ageSelected, setAgeSelected] = useState("");
  const [enteredInput, setEnteredInput] = useState([]);

  const userInput = (event) => {
    setUserNameSelected(event.target.value);
  };

  const ageInput = (event) => {
    setAgeSelected(event.target.value);
  };

  const addCard = (event) => {
    event.preventDefault();

    if (!userNameSelected || !ageSelected) {
      onSetModal(true);
      return;
    }

    const newCard = {
      id: Math.floor(Math.random() * 10000),
      value: userNameSelected,
      age: ageSelected,
    };

    setEnteredInput((prev) => [...prev, newCard]);
    setUserNameSelected("");
    setAgeSelected("");
  };

  return (
    <div className="box-inputs">
      <form type="submit" onSubmit={addCard}>
        <div className="inputs">
          <label>UserName</label>
          <input
            type="text"
            placeholder="add name"
            value={userNameSelected}
            onChange={userInput}
          />
        </div>
        <div className="inputs">
          <label>Age</label>
          <input
            type="number"
            placeholder="add age"
            value={ageSelected}
            onChange={ageInput}
          />
        </div>
        <Button onClickButton={addCard} />
      </form>
      <CardList onAddCard={enteredInput} />
    </div>
  );
};

export default UserData;
