import React from "react";
import {Box, Card, CardContent, CardMedia, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";


interface CardProjectI {
    data: any
}

const CardProject: React.FC<CardProjectI> = ({data}) => {

    return (<Box sx={{width: '100%', display: 'flex', flexDirection: 'column', padding: 2}}>
        <Grid container spacing={2}>
            {
                data && data.map((p, index) => {
                    return (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <Box sx={{
                                width:'100%',
                                display:'flex',
                                justifyContent:'center',
                                alignItems:'center',
                                position: 'relative',
                                borderRadius: 4,
                                overflow: 'hidden',
                            }}>

                                <Box
                                    sx={{
                                        position: 'relative',
                                        width: '100%',
                                        height: 300, // Altura fija de la tarjeta
                                        backgroundImage: `url(${p.image})`, // URL de la imagen
                                        backgroundSize: 'cover',
                                        backgroundPosition: 'center',
                                        overflow: 'hidden',
                                        transition: 'transform 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.10)', // Aumenta el tamaño al hacer hover
                                        },
                                    }}
                                >
                                    {/* Degradado encima de la imagen de fondo */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 0,
                                            left: 0,
                                            width: '100%',
                                            height: '55%',
                                            background: 'linear-gradient(to bottom, rgba(14, 165, 234, 0.01) 10%, rgba(11, 209, 209, 0.7) 100%)',
                                            //background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.01), rgba(0, 0, 0,0.9))', // Degradado oscuro
                                            zIndex: 1, // Asegura que el degradado esté encima de la imagen
                                        }}
                                    />

                                    {/* Contenido (Título y Descripción) */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            bottom: 20,
                                            gap:1,
                                            left: 20,
                                            zIndex: 2, // Asegura que el texto esté encima del degradado
                                            color: 'white',
                                            padding: 2,
                                            transition: 'opacity 0.3s ease',
                                            '&:hover': {
                                                opacity: 0.8, // Cambia la opacidad al hacer hover
                                            },
                                        }}
                                    >
                                        <Typography variant="h5" sx={{fontWeight: 'bold',color:'white'}}>
                                            {p.title}
                                        </Typography>
                                        <Typography variant="body2">
                                            {p.description}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>

                        </Grid>
                    )
                })
            }
        </Grid>
    </Box>)
}
export default CardProject;
