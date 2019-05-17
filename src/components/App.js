import React from "react";
import { Container } from "semantic-ui-react";
import BeerList from "../components/BeerList";
import BeerModal from "../components/BeerModal";

const App = () => {
  return (
    <Container>
      <BeerList />
      <BeerModal />
    </Container>
  );
};

export default App;
