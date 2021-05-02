import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styled from 'styled-components/macro'

import gameFetch, { startGame } from "reducers/gameFetch";


const Start = () => {
  const [userName, setUserName] = useState("");

  const dispatch = useDispatch();

  const onNameSet = () => {
    dispatch(gameFetch.actions.setName(userName));
    dispatch(startGame(userName));
  };

  return (
    <div>
      <label htmlFor="name">
        Welcome to the Labyrinth! Please enter you name:
      </label>
      <input
        id="name"
        type="text"
        value={userName}
        onChange={(event) => setUserName(event.target.value)}
      />
      <button onClick={onNameSet}>Start the game!</button>
    </div>
  );
};

export default Start;
