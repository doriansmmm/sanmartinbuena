
//importar librerias
import { forwardRef } from 'react'
import {
    Box,
    Container,
    CssBaseline,
    Typography,
    Button,
    Grid
} from '@mui/material'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';

//importar componentes
import InfoSolicitante from './infoSolicitante/InfoSolicitante'
import Detalles from './detalles/Detalles'

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor) => augmentColor({ color: { main: mainColor } });
const theme = createTheme({
    palette: {
        redcolor: createColor('#ba000d')
    }
});

const TextMaskCustom = forwardRef(function TextMaskCustom(props, ref) {
    const { onChange, ...other } = props;
    return (
        <IMaskInput
            {...other}
            mask="(#00) 000-0000"
            definitions={{
                '#': /[1-9]/,
            }}
            inputRef={ref}
            onAccept={(value) => onChange({ target: { name: props.name, value } })}
            overwrite
        />
    );
});

TextMaskCustom.propTypes = {
    name: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default function Formulario() {
    return (
        <ThemeProvider theme={theme}>
            <Container component="main">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                </Box>
                <Typography component="h1" variant="h6">
                    Identificación del solicitante
                </Typography>
                <InfoSolicitante />
                <Typography component="h1" variant="h6">
                    Detalles del ticket
                </Typography>
                <Detalles />
                <Box sx={{ mt: 3, flexGrow: 1 }}>
                    <Grid container spacing={1}>
                        <Grid item lg={3} sm={6} xs={12}>
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12}>
                            <Button
                                fullWidth
                                style={{
                                    backgroundColor: "#003087"
                                }}
                                variant="contained"
                            >
                                Guardar
                            </Button>
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12}>
                            <Button
                                fullWidth
                                style={{
                                    backgroundColor: "#003087"
                                }}
                                variant="contained"
                            >
                                Cancelar
                            </Button>
                        </Grid>
                        <Grid item lg={3} sm={6} xs={12}>
                        </Grid>
                    </Grid>
                </Box>

            </Container>
        </ThemeProvider>
    )
}