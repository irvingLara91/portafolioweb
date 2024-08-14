"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var material_1 = require("@mui/material");
var Adb_1 = require("@mui/icons-material/Adb");
var Menu_1 = require("@mui/icons-material/Menu");
require("./Header.css");
var constants_ts_1 = require("../../lib/constants.ts");
var react_i18next_1 = require("react-i18next");
var react_1 = require("react");
var es_svg_1 = require("../../assets/imgI18n/es.svg");
var en_svg_1 = require("../../assets/imgI18n/en.svg");
var pages = ['home', 'about'];
function HideOnScroll(props) {
    var children = props.children, window = props.window;
    var trigger = (0, material_1.useScrollTrigger)({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });
    // @ts-ignore
    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}
var Header = function (props) {
    var _a = React.useState(null), anchorElNav = _a[0], setAnchorElNav = _a[1];
    var _b = React.useState(null), anchorElUser = _b[0], setAnchorElUser = _b[1];
    var handleOpenNavMenu = function (event) {
        setAnchorElNav(event.currentTarget);
    };
    var handleOpenUserMenu = function (event) {
        console.log(event.currentTarget);
        setAnchorElUser(event.currentTarget);
    };
    var handleCloseNavMenu = function () {
        setAnchorElNav(null);
    };
    var handleCloseUserMenu = function () {
        setAnchorElUser(null);
    };
    var _c = (0, react_i18next_1.useTranslation)(), i18n = _c.i18n, t = _c.t;
    var onChangeLang = function (code) {
        var lang_code = code;
        i18n.changeLanguage(lang_code);
        setAnchorElUser(null);
    };
    (0, react_1.useEffect)(function () {
    }, [i18n.language]);
    return (<React.Fragment>
            <material_1.CssBaseline />
            <HideOnScroll>
                <material_1.AppBar sx={{
            backgroundColor: 'rgba(14,23,42,0.48)',
            backgroundImage: "none",
            backdropFilter: ' blur(4px)'
        }}>
                    <material_1.Container maxWidth={"lg"}>
                        <material_1.Toolbar disableGutters>

                            <Adb_1.default sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }}/>


                            <material_1.Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
                                <material_1.IconButton size="large" aria-label="account of current user" aria-controls="menu-appbar" aria-haspopup="true" onClick={handleOpenNavMenu} color="inherit">
                                    <Menu_1.default />
                                </material_1.IconButton>
                                <material_1.Menu id="menu-appbar" anchorEl={anchorElNav} anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
        }} open={Boolean(anchorElNav)} onClose={handleCloseNavMenu} sx={{
            display: { xs: 'block', md: 'none' },
        }}>
                                    {pages.map(function (page) { return (<material_1.MenuItem key={page} onClick={handleCloseNavMenu}>
                                            <material_1.Typography textAlign="center">{t("".concat(page))}</material_1.Typography>
                                        </material_1.MenuItem>); })}
                                </material_1.Menu>
                            </material_1.Box>

                            <material_1.Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center' }}>

                                <Adb_1.default sx={{
            display: { xs: 'flex', md: 'none' }, mr: 1, flexGrow: 1,
        }}/>
                            </material_1.Box>

                            <material_1.Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                                {pages.map(function (page) { return (<material_1.Box className={"buttonCustom"} key={page} onClick={handleCloseNavMenu} sx={{
                m: '16px 16px 16px 16px',
                fontSize: '18px',
                color: 'white', display: 'block'
            }}>
                                        {t("".concat(page))}
                                    </material_1.Box>); })}
                            </material_1.Box>

                            <material_1.Box sx={{ flexGrow: 0 }}>
                                <material_1.Tooltip title={t("label")}>
                                    <material_1.IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                        <material_1.Avatar alt="Remy Sharp" src={i18n.language === 'es' ? es_svg_1.default : en_svg_1.default}/>
                                    </material_1.IconButton>
                                </material_1.Tooltip>
                                <material_1.Menu sx={{ mt: '45px' }} id="menu-appbar" anchorEl={anchorElUser} anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} keepMounted transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }} open={Boolean(anchorElUser)} onClose={handleCloseUserMenu}>
                                    {constants_ts_1.LANGUAGES.map(function (_a, index) {
            var code = _a.code, label = _a.label;
            return (<material_1.MenuItem key={index} onClick={function () {
                    onChangeLang(code);
                }}>
                                            <material_1.Typography textAlign="center">{label}</material_1.Typography>
                                        </material_1.MenuItem>);
        })}
                                </material_1.Menu>
                            </material_1.Box>
                        </material_1.Toolbar>
                    </material_1.Container>
                </material_1.AppBar>
            </HideOnScroll>
            <material_1.Toolbar />
        </React.Fragment>);
};
exports.default = Header;
