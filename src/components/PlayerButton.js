import styled from "styled-components";

export default function PlayerButton({ children, onClick }) {
  return (
    <>
      <Button onClick={() => onClick({ children })}>{children}</Button>
    </>
  );
}

const Button = styled.button`
  width: 20px;
  justify-self: center;
`;
