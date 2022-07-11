import styled from "styled-components";
import { useState } from "react";

export default function PlayerName({ onNameSet }) {
  const [name, setName] = useState("");
  const [addPlayer, setAddPlayer] = useState(false);

  return (
    <>
      <StyledButton
        aria-label="add player"
        onClick={() => setAddPlayer(!addPlayer)}
      >
        +
      </StyledButton>
      {addPlayer && (
        <Container>
          <label htmlFor="name">players name</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={(event) => setName(event.target.value)}
          />
          <Submitbutton
            type="submit"
            onClick={(event) => {
              event.preventDefault();
              onNameSet(name);
              document.forms[0][0].value = "";
            }}
          >
            go!
          </Submitbutton>
        </Container>
      )}
    </>
  );
}

const Container = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 20px 5px;
  color: lightcoral;
  margin: 40px 0;
`;

const StyledButton = styled.button`
  margin: 10px;
  position: absolute;
  right: 30px;
  border: none;
  border-radius: 50%;
  padding: 6px 13px 8px 13px;
  background-color: lightcoral;
  color: white;
  font-weight: 800;
  font-size: 20px;
`;

const Submitbutton = styled.button`
  width: 50px;
  justify-self: center;
`;
