import React from "react";
import './App.css'
import RouterApp from "../src/routes/RouterApp.tsx";
import {Container} from "@mui/material";
import Header from "../src/components/Header/Header.tsx";

function App() {

  return (
      <Container disableGutters maxWidth={false} sx={{background:'#0e172a'}}>
          <main>
              <Header/>
        <RouterApp/>
          </main>
      </Container>
  )
}

export default App
