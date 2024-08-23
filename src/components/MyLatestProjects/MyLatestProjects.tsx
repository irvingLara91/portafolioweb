import React from "react";
import {Box, Button, styled} from "@mui/material";
import {useTranslation} from "react-i18next";
import Typography, {TypographyProps} from '@mui/material/Typography';
import {i} from "vite/dist/node/types.d-aGj9QkWt";


interface CustomizedTypographyGradientProps extends Omit<TypographyProps, 'color'> { // Omitir props conflictivas
    text?: string;
}

// @ts-ignore
const CustomizedTypographyGradient = styled(({text = "hola", ...props}: CustomizedTypographyGradientProps) => (
    <Typography
        {...props}
    >{text}</Typography>
))`
    background: linear-gradient(90deg, ${props => props.color1}, ${props => props.color2} 51%, ${props => props.color1}) var(--x, 0)/50%;
    font-weight: 700;
    -webkit-background-clip: text !important;
    -webkit-text-fill-color: transparent !important;
    background-clip: text !important;
    text-fill-color: transparent
` as typeof Typography;

const list = ["All Projects", "Web Developer", "Mobile App"]
const MyLatestProjects = () => {
    const {t}: any = useTranslation()

    return (<Box sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%',gap:5}}>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
            <CustomizedTypographyGradient text={t('myProjects')} color2={"#0bd1d1"} fontFamily={"Roboto"} fontSize={{xs: 30, md: 40}} color1={"#0ea5ea"} style={{"--x": 0} as React.CSSProperties}/>
        </Box>
        <Box
            sx={{
                justifyContent:'center',
                display: 'flex', flexDirection: 'row', width: '100%', alignItems: 'center'
            }}
        >{
            list.map((label: any,index:number)=>{
                return(<Button key={index}>{label}</Button>)
            })
        }</Box>
    </Box>)
}
export default MyLatestProjects;
