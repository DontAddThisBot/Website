import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Navbar from "./Navbar";
import styled from "styled-components";
import img from "./img/shapes.png";

function App() {
  return (
    <AppContainer>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </AppContainer>
  );
}

const AppContainer = styled.div`
  color: white;
  min-height: 100vh;
  background-color: #2b2647;
  background-image: url(${img});

  body {
    color: white;
    min-height: 100vh;
    background-color: #1d1f1d;
  }
`;

export default App;
