import styled from "styled-components";
import { useState } from "react";

export default function PlayerName({ onNameSet }) {
  const [name, setName] = useState("");
  return (
    <Container>
      <label htmlFor="name">players name</label>
      <input
        type="text"
        id="name"
        name="name"
        onChange={(event) => setName(event.target.value)}
      />
      <button
        onClick={(event) => {
          event.preventDefault();
          onNameSet(name);
        }}
      >
        go!
      </button>
    </Container>
  );
}

const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 5px;
  background-color: wheat;
  margin: 10px 0;
`;
