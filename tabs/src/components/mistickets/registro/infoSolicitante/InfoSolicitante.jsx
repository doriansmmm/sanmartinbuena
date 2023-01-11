import { forwardRef } from 'react'
import {
    Box,
    Grid,
    TextField,
    InputLabel,
    Input
} from '@mui/material'
import { IMaskInput } from 'react-imask';
import PropTypes from 'prop-types';

//importar componentes
import Solicitante from './Solicitante';
import SedeProyecto from './SedeProyecto';
import CentroCostos from './CentroCostos'

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

export default function InfoSolicitante(){
    return (
        <Box component="form"  sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item lg={4} sm={6} xs={12}>
                            <Solicitante/>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <SedeProyecto/>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <CentroCostos/>
                        </Grid>
                        <Grid item lg={4} sm={6} xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="userEmail"
                                label="Email solicitante"
                                name="userEmail"
                                autoComplete="email"
                                disabled
                            />
                        </Grid>
                        
                        <Grid item lg={4} sm={6} xs={12}>
                            <InputLabel htmlFor="formatted-text-mask-input">Teléfono</InputLabel>
                            <Input
                                required
                                fullWidth
                                name="userPhone"
                                id="userPhone"
                            />
                        </Grid>
                        
                    </Grid>
                </Box>
    )
}