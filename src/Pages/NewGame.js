import styled from "styled-components";

export default function NewGame({ onGameInput }) {
  return (
    <>
      <StyledHeading>new game</StyledHeading>
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
        <input
          type="text"
          name="nameOfGame"
          id="nameOfGame"
          required
          autoComplete="off"
          placeholder="name of the game"
        />
        <label htmlFor="players">Who is playing? seperate by comma. </label>
        <input
          type="text"
          name="players"
          id="players"
          placeholder="put the players names here"
          autoComplete="off"
        />
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
  margin: 40px;
  border-radius: 50%;
  border: 3px solid lightcoral;
  padding: 40px 10px;
  align-self: center;
`;

const StyledHeading = styled.h1`
  text-align: center;
  color: lightcoral;
`;
