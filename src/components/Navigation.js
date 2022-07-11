import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <>
      <NavigationContainer>
        <Button to="/home">Home</Button>

        <Button to="/history">History</Button>
      </NavigationContainer>
    </>
  );
}

const NavigationContainer = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 10px;
  gap: 10px;
  place-items: center;
`;

const Button = styled(Link)`
  padding: 10px 30px;
  background-color: lightcoral;
  text-decoration: none;
  font-weight: 800;
  color: white;
`;
