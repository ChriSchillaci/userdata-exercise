import React, { useState } from "react";
import UserData from "./components/UserData/UserData";
import Modal from './components/Modal/Modal'

function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  return (
    <div>
      <UserData onSetModal={setIsModalVisible} />
      {isModalVisible && <Modal onSetModal={setIsModalVisible} />}
    </div>
  );
}

export default App;
