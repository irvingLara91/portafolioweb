import React from "react";
import {Box, Button, styled} from "@mui/material";
import {useTranslation} from "react-i18next";
import Typography, {TypographyProps} from '@mui/material/Typography';


interface CustomizedTypographyGradientProps extends TypographyProps {
    text?: string;
}

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

const list = ["All Projects", "Web Developer", "Mobile App"]
const MyLatestProjects = () => {
    const {t}: any = useTranslation()

    return (<Box sx={{display: 'flex', flexDirection: 'column', width: '100%', height: '100%',gap:5}}>
        <Box sx={{display: 'flex', flexDirection: 'column', width: '100%', alignItems: 'center'}}>
            {/*<CustomizedTypographyGradient text={t('myProjects')} fontFamily={"Roboto"} fontSize={{xs: 30, md: 40}}
                                          component="span"
                                          />*/}
            <CustomizedTypographyGradient variant="h4"  text={t('myProjects')}/>
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
