import styled from "styled-components";

export default function NewGame({ onGameInput }) {
  return (
    <>
      <h1>new game</h1>
      <StyledForm
        onSubmit={(event) => {
          event.preventDefault();
          onGameInput(
            event.target.nameOfGame.value,
            event.target.players.value
          );
        }}
      >
        <label htmlFor="nameOfGame">What are you plaing today? </label>
        <input type="text" name="nameOfGame" id="nameOfGame" />
        <label htmlFor="players">Who is playing? seperate by comma. </label>
        <input type="text" name="players" id="players" />
        <StyledButton type="submit">OK! lets play!</StyledButton>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 40px;
  padding: 20px;
`;

const StyledButton = styled.button`
  width: 140px;
  padding: 20px 10px;
  align-self: center;
`;
