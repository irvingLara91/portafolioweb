import * as React from 'react';
import {
    AppBar,
    Avatar,
    Box,
    Container,
    CssBaseline,
    IconButton,
    Menu,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography,
    useScrollTrigger,
    alpha,
} from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import {useTranslation} from 'react-i18next';
import {useEffect, useState} from 'react';
import {useNavigate, NavLink} from 'react-router-dom';
import esCVG from '../../assets/imgI18n/es.svg';
import enCVG from '../../assets/imgI18n/en.svg';
import {LANGUAGES} from "../../lib/constants.ts";

// --- Interfaces ---
interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

// Definimos las rutas
const pages = [
    {key: 'home', path: '/'},
    {key: 'about', path: '/about'},
];

// --- Componente para ocultar/mostrar sombra al hacer scroll ---
function HideOnScroll(props: Props) {
    const {children, window} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 8 : 0,
        sx: {
            ...children.props.sx,
            backdropFilter: trigger ? 'blur(12px)' : 'blur(8px)',
            backgroundColor: trigger
                ? 'rgba(11, 15, 25, 0.85)'
                : 'rgba(11, 15, 25, 0.45)',
            transition: 'all 0.4s ease',
            borderBottom: trigger ? '1px solid rgba(0, 229, 255, 0.2)' : '1px solid transparent',
        },
    });
}

// --- Componente Principal ---
const Header = () => {
    const {i18n, t} = useTranslation();
    const navigate = useNavigate();
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorElNav(event.currentTarget);
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) =>
        setAnchorElUser(event.currentTarget);

    const handleCloseNavMenu = () => setAnchorElNav(null);
    const handleCloseUserMenu = () => setAnchorElUser(null);

    const onChangeLang = (code: string) => {
        i18n.changeLanguage(code);
        setAnchorElUser(null);
    };

    // Rotación automática del avatar al cambiar idioma
    const [avatarRotate, setAvatarRotate] = useState(0);
    useEffect(() => {
        setAvatarRotate((prev) => prev + 360);
    }, [i18n.language]);

    return (
        <>
            <CssBaseline/>
            <HideOnScroll>
                <AppBar
                    position="fixed"
                    sx={{
                        backgroundImage: 'linear-gradient(135deg, rgba(0,229,255,0.08) 0%, rgba(179,136,255,0.08) 100%)',
                        boxShadow: '0 0 30px rgba(0, 229, 255, 0.15)',
                        borderBottom: '1px solid rgba(0, 229, 255, 0.15)',
                        '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            background: 'linear-gradient(90deg, #00E5FF, #B388FF, #00E5FF)',
                            backgroundSize: '200% 100%',
                            animation: 'gradientMove 4s linear infinite',
                        },
                        '@keyframes gradientMove': {
                            '0%': {backgroundPosition: '0% 0%'},
                            '100%': {backgroundPosition: '200% 0%'},
                        },
                    }}
                >
                    <Container maxWidth="lg">
                        <Toolbar disableGutters sx={{position: 'relative'}}>
                            {/* Logo rotatorio (escritorio) - también navega a home */}
                            <AdbIcon
                                onClick={() => navigate('/')}
                                sx={{
                                    display: {xs: 'none', md: 'flex'},
                                    mr: 2,
                                    color: '#00E5FF',
                                    fontSize: 40,
                                    filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.6))',
                                    animation: 'spinLogo 8s linear infinite',
                                    cursor: 'pointer',
                                    '@keyframes spinLogo': {
                                        '0%': {transform: 'rotate(0deg)'},
                                        '100%': {transform: 'rotate(360deg)'},
                                    },
                                }}
                            />

                            {/* --- Menú Hamburguesa (móvil) --- */}
                            <Box sx={{flexGrow: 0, display: {xs: 'flex', md: 'none'}}}>
                                <IconButton
                                    size="large"
                                    aria-label="menu"
                                    onClick={handleOpenNavMenu}
                                    sx={{color: '#00E5FF'}}
                                >
                                    <MenuIcon/>
                                </IconButton>
                                <Menu
                                    anchorEl={anchorElNav}
                                    open={Boolean(anchorElNav)}
                                    onClose={handleCloseNavMenu}
                                    sx={{
                                        display: {xs: 'block', md: 'none'},
                                        '& .MuiPaper-root': {
                                            backgroundColor: 'rgba(14, 23, 42, 0.9)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(0,229,255,0.2)',
                                        },
                                    }}
                                >
                                    {pages.map(({key, path}) => (
                                        <MenuItem
                                            key={key}
                                            component={NavLink}
                                            to={path}
                                            onClick={handleCloseNavMenu}
                                            sx={{
                                                color: 'white',
                                                textDecoration: 'none',
                                                '&.active': {
                                                    color: '#00E5FF',
                                                    backgroundColor: alpha('#00E5FF', 0.15),
                                                    borderLeft: '3px solid #00E5FF',
                                                },
                                                '&:hover': {
                                                    backgroundColor: alpha('#00E5FF', 0.08),
                                                },
                                            }}
                                        >
                                            <Typography textAlign="center">{t(key)}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>

                            {/* --- Logo central móvil (también navega) --- */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: {xs: 'flex', md: 'none'},
                                    justifyContent: 'center',
                                }}
                                onClick={() => navigate('/')}
                            >
                                <AdbIcon
                                    sx={{
                                        color: '#00E5FF',
                                        fontSize: 36,
                                        filter: 'drop-shadow(0 0 8px rgba(0,229,255,0.6))',
                                        animation: 'spinLogo 8s linear infinite',
                                        cursor: 'pointer',
                                        '@keyframes spinLogo': {
                                            '0%': {transform: 'rotate(0deg)'},
                                            '100%': {transform: 'rotate(360deg)'},
                                        },
                                    }}
                                />
                            </Box>

                            {/* --- Menú de navegación (escritorio) con NavLink --- */}
                            <Box
                                sx={{
                                    flexGrow: 1,
                                    display: {xs: 'none', md: 'flex'},
                                    justifyContent: 'center',
                                    gap: 4,
                                }}
                            >
                                {pages.map(({key, path}) => (
                                    <Typography
                                        key={key}
                                        component={NavLink}
                                        to={path}
                                        onClick={handleCloseNavMenu}
                                        sx={{
                                            color: 'white',
                                            fontSize: '1.1rem',
                                            fontWeight: 500,
                                            cursor: 'pointer',
                                            position: 'relative',
                                            textDecoration: 'none',
                                            transition: 'color 0.3s ease',
                                            '&::after': {
                                                content: '""',
                                                position: 'absolute',
                                                bottom: -4,
                                                left: 0,
                                                width: '0%',
                                                height: '2px',
                                                background: 'linear-gradient(90deg, #00E5FF, #B388FF)',
                                                transition: 'width 0.4s ease',
                                            },
                                            '&:hover': {
                                                color: '#00E5FF',
                                                '&::after': {width: '100%'},
                                            },
                                            '&.active': {
                                                color: '#00E5FF',
                                                textShadow: '0 0 12px rgba(0, 229, 255, 0.6)',
                                                '&::after': {width: '100%'},
                                            },
                                        }}
                                    >
                                        {t(key)}
                                    </Typography>
                                ))}
                            </Box>

                            {/* --- Selector de idioma (Avatar) --- */}
                            <Box sx={{flexGrow: 0}}>
                                <Tooltip title={t('label')}>
                                    <IconButton onClick={handleOpenUserMenu} sx={{p: 0}}>
                                        <Avatar
                                            alt="Idioma"
                                            src={i18n.language === 'es' ? esCVG : enCVG}
                                            sx={{
                                                width: 40,
                                                height: 40,
                                                border: '2px solid #00E5FF',
                                                boxShadow: '0 0 20px rgba(0,229,255,0.4)',
                                                transition: 'transform 0.6s ease, box-shadow 0.3s ease',
                                                transform: `rotate(${avatarRotate}deg)`,
                                                '&:hover': {
                                                    boxShadow: '0 0 30px rgba(179,136,255,0.7)',
                                                    transform: `rotate(${avatarRotate + 15}deg) scale(1.05)`,
                                                },
                                            }}
                                        />
                                    </IconButton>
                                </Tooltip>
                                <Menu
                                    sx={{
                                        mt: '45px',
                                        '& .MuiPaper-root': {
                                            backgroundColor: 'rgba(14, 23, 42, 0.9)',
                                            backdropFilter: 'blur(10px)',
                                            border: '1px solid rgba(0,229,255,0.2)',
                                        },
                                    }}
                                    anchorEl={anchorElUser}
                                    open={Boolean(anchorElUser)}
                                    onClose={handleCloseUserMenu}
                                    anchorOrigin={{vertical: 'top', horizontal: 'right'}}
                                    transformOrigin={{vertical: 'top', horizontal: 'right'}}
                                >
                                    {LANGUAGES.map(({code, label}) => (
                                        <MenuItem
                                            key={code}
                                            onClick={() => onChangeLang(code)}
                                            sx={{
                                                color: 'white',
                                                '&:hover': {
                                                    backgroundColor: alpha('#00E5FF', 0.15),
                                                },
                                            }}
                                        >
                                            <Typography textAlign="center">{label}</Typography>
                                        </MenuItem>
                                    ))}
                                </Menu>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </HideOnScroll>
            <Toolbar sx={{marginBottom: 2}}/>
        </>
    );
};

export default Header;