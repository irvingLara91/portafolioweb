import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {
    Box,
    TextField,
    Button,
    Stack,
    Snackbar,
    Alert,
    Typography,
    Paper,
    CircularProgress,
    Divider,
    IconButton,
    Tooltip,
    MenuItem,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
import {useTranslation} from 'react-i18next';


// --- CONFIGURACIÓN desde variables de entorno ---
const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN || '';
const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID || '';
const WHATSAPP_PHONE = import.meta.env.VITE_WHATSAPP_PHONE || '5219991501069';

const validationSchema = Yup.object({
    name: Yup.string().required('El nombre es requerido'),
    email: Yup.string().email('Email inválido').required('El email es requerido'),
    phone: Yup.string().required('El teléfono es requerido'),
    message: Yup.string().min(10, 'Mínimo 10 caracteres').required('El mensaje es requerido'),
    service: Yup.string().required('Selecciona un servicio'),
});

const ContactForm = () => {
    const {t} = useTranslation();
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const [snackbarMessage, setSnackbarMessage] = React.useState('');
    const [snackbarSeverity, setSnackbarSeverity] = React.useState<'success' | 'error'>('success');
    const [isLoading, setIsLoading] = React.useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            phone: '',
            message: '',
            service: '',
        },
        validationSchema,
        onSubmit: async (values, {resetForm}) => {
            setIsLoading(true);

            const messageText = `
📩 *Nuevo mensaje de contacto*

👤 *Nombre:* ${values.name}
📧 *Email:* ${values.email}
📱 *Teléfono:* ${values.phone}
🛠 *Servicio:* ${values.service}
💬 *Mensaje:* ${values.message}
      `;

            try {
                const telegramUrl = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
                const response = await fetch(telegramUrl, {
                    method: 'POST',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({
                        chat_id: TELEGRAM_CHAT_ID,
                        text: messageText,
                        parse_mode: 'Markdown',
                    }),
                });

                const data = await response.json();
                if (!data.ok) {
                    throw new Error(data.description || 'Error al enviar a Telegram');
                }

                setSnackbarMessage('✅ Mensaje enviado correctamente a Telegram.');
                setSnackbarSeverity('success');
                resetForm();
            } catch (error: any) {
                console.error(error);
                setSnackbarMessage(`❌ Error: ${error.message || 'Intenta de nuevo.'}`);
                setSnackbarSeverity('error');
            } finally {
                setIsLoading(false);
                setOpenSnackbar(true);
            }
        },
    });

    return (
        <Box
            id={"section-contact"} sx={{
            scrollMarginTop: '130px', // 👈 Cambiado de 100px a 130px
        }}>
            <Paper
                elevation={0}
                sx={{
                    p: 4,
                    background: 'rgba(14, 23, 42, 0.7)',
                    backdropFilter: 'blur(10px)',
                    border: '1px solid rgba(0, 229, 255, 0.2)',
                    borderRadius: 4,
                    maxWidth: 600,
                    mx: 'auto',
                }}
            >
                <Typography variant="h4" sx={{color: 'white', textAlign: 'center', mb: 2}}>
                    {t('contactTitle')}
                </Typography>
                <Typography variant="body2" sx={{color: '#94a9c9', textAlign: 'center', mb: 4}}>
                    {t('contactSubtitle')}
                </Typography>

                <form onSubmit={formik.handleSubmit}>
                    <Stack spacing={3}>
                        <TextField
                            fullWidth
                            label={t('name')}
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.name && Boolean(formik.errors.name)}
                            helperText={formik.touched.name && formik.errors.name}
                            InputProps={{sx: {color: 'white'}}}
                            InputLabelProps={{sx: {color: '#94a9c9'}}}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: 'rgba(0, 229, 255, 0.3)'},
                                    '&:hover fieldset': {borderColor: '#00E5FF'},
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label={t('email')}
                            name="email"
                            type="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.email && Boolean(formik.errors.email)}
                            helperText={formik.touched.email && formik.errors.email}
                            InputProps={{sx: {color: 'white'}}}
                            InputLabelProps={{sx: {color: '#94a9c9'}}}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: 'rgba(0, 229, 255, 0.3)'},
                                    '&:hover fieldset': {borderColor: '#00E5FF'},
                                },
                            }}
                        />

                        <TextField
                            fullWidth
                            label={t('phone')}
                            name="phone"
                            value={formik.values.phone}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.phone && Boolean(formik.errors.phone)}
                            helperText={formik.touched.phone && formik.errors.phone}
                            InputProps={{sx: {color: 'white'}}}
                            InputLabelProps={{sx: {color: '#94a9c9'}}}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: 'rgba(0, 229, 255, 0.3)'},
                                    '&:hover fieldset': {borderColor: '#00E5FF'},
                                },
                            }}
                        />

                        {/* 👇 Select corregido (sin native: true) */}
                        <TextField
                            fullWidth
                            select
                            name="service"
                            value={formik.values.service}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.service && Boolean(formik.errors.service)}
                            helperText={formik.touched.service && formik.errors.service}
                            InputProps={{sx: {color: 'white'}}}
                            InputLabelProps={{sx: {color: '#94a9c9'}}}
                            SelectProps={{
                                displayEmpty: true,
                                renderValue: (value: any) => {
                                    if (!value) {
                                        return <em style={{color: '#94a9c9'}}>{t('selectService')}</em>;
                                    }
                                    return value;
                                },
                            }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: 'rgba(0, 229, 255, 0.3)'},
                                    '&:hover fieldset': {borderColor: '#00E5FF'},
                                },
                                '& .MuiSelect-select': {color: 'white'},
                            }}
                        >
                            <MenuItem value="" disabled>
                                <em>{t('selectService')}</em>
                            </MenuItem>
                            <MenuItem value="web">Web Development</MenuItem>
                            <MenuItem value="mobile">Mobile App</MenuItem>
                            <MenuItem value="fullstack">Full Stack</MenuItem>
                            <MenuItem value="consulting">Consultoría</MenuItem>
                        </TextField>

                        <TextField
                            fullWidth
                            multiline
                            rows={4}
                            label={t('message')}
                            name="message"
                            value={formik.values.message}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            error={formik.touched.message && Boolean(formik.errors.message)}
                            helperText={formik.touched.message && formik.errors.message}
                            InputProps={{sx: {color: 'white'}}}
                            InputLabelProps={{sx: {color: '#94a9c9'}}}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '& fieldset': {borderColor: 'rgba(0, 229, 255, 0.3)'},
                                    '&:hover fieldset': {borderColor: '#00E5FF'},
                                },
                            }}
                        />

                        <Button
                            type="submit"
                            fullWidth
                            disabled={isLoading}
                            sx={{
                                py: 1.5,
                                background: 'linear-gradient(90deg, #00E5FF, #B388FF)',
                                color: '#0B0F19',
                                fontWeight: 700,
                                borderRadius: 30,
                                '&:hover': {
                                    transform: 'scale(1.02)',
                                    boxShadow: '0 0 25px #00E5FF',
                                },
                                '&:disabled': {
                                    background: '#2a3a5a',
                                    color: '#94a9c9',
                                },
                            }}
                        >
                            {isLoading ? <CircularProgress size={24} sx={{color: '#0B0F19'}}/> : t('send')}
                        </Button>
                    </Stack>
                </form>

                <Divider sx={{my: 3, borderColor: 'rgba(0, 229, 255, 0.1)'}}/>

                <Box sx={{display: 'flex', justifyContent: 'center', gap: 2}}>
                    <Tooltip title="Abrir WhatsApp con el mensaje">
                        <IconButton
                            onClick={() => {
                                const message = formik.values.message
                                    ? `Hola, soy ${formik.values.name}. ${formik.values.message}`
                                    : 'Hola, me gustaría contactarte.';
                                window.open(`https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                            sx={{
                                color: '#25D366',
                                border: '1px solid #25D366',
                                '&:hover': {background: 'rgba(37, 211, 102, 0.1)'},
                            }}
                        >
                            <WhatsAppIcon/>
                        </IconButton>
                    </Tooltip>
                    <Tooltip title="Abrir Telegram con el mensaje">
                        <IconButton
                            onClick={() => {
                                const message = formik.values.message
                                    ? `Hola, soy ${formik.values.name}. ${formik.values.message}`
                                    : 'Hola, me gustaría contactarte.';
                                window.open(`https://t.me/portLara_bot?text=${encodeURIComponent(message)}`, '_blank');
                            }}
                            sx={{
                                color: '#26A5E4',
                                border: '1px solid #26A5E4',
                                '&:hover': {background: 'rgba(38, 165, 228, 0.1)'},
                            }}
                        >
                            <TelegramIcon/>
                        </IconButton>
                    </Tooltip>
                </Box>

                <Snackbar
                    open={openSnackbar}
                    autoHideDuration={6000}
                    onClose={() => setOpenSnackbar(false)}
                    anchorOrigin={{vertical: 'bottom', horizontal: 'center'}}
                >
                    <Alert onClose={() => setOpenSnackbar(false)} severity={snackbarSeverity} sx={{width: '100%'}}>
                        {snackbarMessage}
                    </Alert>
                </Snackbar>
            </Paper>
        </Box>
    );
};

export default ContactForm;