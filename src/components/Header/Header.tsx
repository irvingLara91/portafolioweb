import * as React from 'react';
import {
    AppBar, Avatar, Box,
    Container,
    CssBaseline,
    IconButton,
    Menu,
    MenuItem,
    Toolbar, Tooltip,
    Typography,
    useScrollTrigger
} from "@mui/material";
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import './Header.css'
import {LANGUAGES} from "../../lib/constants.ts";
import {useTranslation} from 'react-i18next';
import {useEffect} from "react";
import esCVG from '../../assets/imgI18n/es.svg'
import enCVG from '../../assets/imgI18n/en.svg'

const pages = ['home', 'about'];

interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

function HideOnScroll(props: Props) {
    const {children, window} = props;

    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    // @ts-ignore
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });

}


const Header = (props: Props) => {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
        console.log(event.currentTarget)
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const {i18n, t}: any = useTranslation()

    const onChangeLang = (code: string) => {
        const lang_code = code
        i18n.changeLanguage(lang_code)

        setAnchorElUser(null);
    }


    useEffect(() => {
    }, [i18n.language]);

    return (<React.Fragment>
            <CssBaseline/>
            <HideOnScroll>
                <AppBar sx={{
                    backgroundColor: 'rgba(14,23,42,0.48)',
                    backgroundImage: "none",
                    backdropFilter: ' blur(4px)'
                }}>
                    <Container maxWidth={"lg"}>
                        <Toolbar disableGutters>

                            <AdbIcon sx={{display: {xs: 'none', md: 'flex'}, mr: 1}}/>


                            <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="account of current user"
                                    aria-controls="menu-appbar"
                                    aria-haspopup="true"
                                    onClick={handleOpenNavMenu}
                                    color="inherit"
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    id="menu-appbar"
                                    anchorEl={anchorElNav}
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'left',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'left',
                                    }}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: {xs: 'block', md: 'none'},
                                    }}
                                >
                                    {pages.map((page) => (
                                        <MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <Typography textAlign="center">{t(`${page}`)}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}, justifyContent: 'center'}}>

                                <AdbIcon sx={{
                                    display: {xs: 'flex', md: 'none'}, mr: 1, flexGrow: 1,
                                }}/>
                            </Box>

                            <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}, justifyContent: 'center'}}>
                                {pages.map((page) => (
                                    <Box
                                        className={"buttonCustom"}
                                        key={page}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            m: '16px 16px 16px 16px',
                                            fontSize: '18px',
                                            color: 'white', display: 'block'
                                        }}
                                    >
                                        {t(`${page}`)}
                                    </Box>
                                ))}
                            </Box>

                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title={t("label")}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar alt="Remy Sharp" src={i18n.language === 'es' ?  esCVG : enCVG }/>
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{mt: '45px'}}
                                    id="menu-appbar"
                                    anchorEl={anchorElUser}
                                    anchorOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    keepMounted
                                    transformOrigin={{
                                        vertical: 'top',
                                        horizontal: 'right',
                                    }}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                >
                                    {LANGUAGES.map(({code, label}, index) => (
                                        <MenuItem key={index} onClick={() => {
                                            onChangeLang(code)
                                        }}>
                                            <Typography textAlign="center">{label}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar/>
        </React.Fragment>
    )
}
export default Header;
