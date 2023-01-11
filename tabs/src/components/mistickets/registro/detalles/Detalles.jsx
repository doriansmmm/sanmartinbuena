import { forwardRef } from 'react'
import {
    Box,
    Grid,
    TextField
} from '@mui/material'
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';

//importar componentes
import Categoria1 from './Categoria1';
import Categoria2 from './Categoria2';
import Categoria3 from './Categoria3';

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

export default function Detalles() {
    return (
        <Box component="form" sx={{ mt: 3 }}>
            <Grid container spacing={2}>
                <Grid item lg={4} sm={6} xs={12}>
                    <Categoria1 />
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    <Categoria2 />
                </Grid>
                <Grid item lg={4} sm={6} xs={12}>
                    <Categoria3 />
                </Grid>
                <Grid item lg={12} sm={6} xs={12}>
                    <TextField
                        name="asunto"
                        required
                        fullWidth
                        id="asunto"
                        label="Asunto"
                        autoFocus
                        multiline
                    />
                </Grid>
                <Grid item lg={12} sm={6} xs={12}>
                    <TextField
                        name="detalle"
                        required
                        fullWidth
                        id="detalle"
                        label="Detalle"
                        autoFocus
                        multiline
                    />
                </Grid>

            </Grid>
        </Box>
    )
}