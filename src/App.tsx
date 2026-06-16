import React from "react";
import './App.css';
import RouterApp from "../src/routes/RouterApp.tsx";
import { Container, Box } from "@mui/material";
import Footer from "./components/Footer.tsx";

function App() {
    return (
        <Container
            disableGutters
            maxWidth={false}
            sx={{
                background: '#0e172a',
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh', // Ocupa toda la altura de la ventana
            }}
        >
            {/* El contenido principal (rutas) ocupará todo el espacio disponible */}
            <Box component="main" sx={{ flex: 1 }}>
                <RouterApp />
            </Box>

            {/* El footer siempre al final */}
            <Footer />
        </Container>
    );
}

export default App;