import React, {useState} from "react";
import {Box, Button, Grid, styled} from "@mui/material";
import {useTranslation} from "react-i18next";
import Typography, {TypographyProps} from '@mui/material/Typography';
import {LIST_OPTIONS, Projects_List} from "./../../lib/constants.ts";
import CardProject from "../MyLatestProjects/CardProject.tsx";


interface CustomizedTypographyGradientProps extends TypographyProps {
    text?: string;
}

// @ts-ignore
const CustomizedTypographyGradient = styled(({ text = 'Hola', component = 'span', ...props }: CustomizedTypographyGradientProps) => (
    <Typography
        component={component}
        {...props}
    >
        {text}
    </Typography>
))`
  background: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea) 0/200%;
  font-weight: 700;
  -webkit-background-clip: text !important;
  -webkit-text-fill-color: transparent !important;
  background-clip: text !important;
  text-fill-color: transparent;
`;

const MyLatestProjects = () => {
    const {t}: any = useTranslation();
    const [selected,setSelected]=useState('');

    return (<Box sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%',gap:5}}>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>

            <CustomizedTypographyGradient variant="h4"  text={t('myProjects')} fontSize={{xs: 30, md: 40}}/>
        </Box>
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                alignItems: 'center',
                flexDirection: {
                    xs: 'column', // Columnas en mobile
                    sm: 'row',    // Filas en tablet y desktop
                },
                gap: 1,
            }}
        >
            <Grid
                container
                spacing={3}
                sx={{
                    alignItems:'center',
                    display:'flex',
                    justifyContent: 'center',
                }}
            >
                {LIST_OPTIONS.map((item: any, index: number) => (
                    <Grid
                        item
                        key={index}
                        sx={{
                            display: 'flex',
                            alignItems:'center',
                            justifyContent: 'center',
                        }}
                    >
                        <Button
                            variant="contained"
                            sx={{
                                width:'auto',
                                fontWeight:700,
                                borderRadius:10,
                                border:' 2px solid #0ea5ea',
                                color: "#fff",
                                background: selected ===item.name? "linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea) 0 / 200%": 'transparent',
                                padding: "10px 15px",
                                lineHeight: "20px",
                                fontSize:{xs:'12px',sm:'14px',md:'16px'},
                                transition: 'all 0.25s cubic-bezier(0.02, 0.01, 0.47, 1)', // Transición suave
                                '&:hover': {
                                    color: '#fff', // Color del texto al hacer hover
                                    background: 'linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea) 0 / 200%',
                                    border: '2px solid transparent', // Borde transparente
                                    transform: 'translateY(-4px)', // Movimiento hacia arriba

                                },


                        }}
                            onClick={() => setSelected(item.name)}
                        >
                            {t(`${item.key}`)}
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </Box>

        <Box sx={{width:'100%',display:'flex',flexDirection:'column'}}>
            <CardProject data={Projects_List} />
        </Box>
    </Box>)
}
export default MyLatestProjects;
