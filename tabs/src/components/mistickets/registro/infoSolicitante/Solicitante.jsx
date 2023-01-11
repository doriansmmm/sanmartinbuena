import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//importar hooks


export default function Solicitante() {



    const [solicitanteSelect, setSolicitanteSelect] = useState('')
    // eslint-disable-next-line
    const [usuarios, setUsuarios] = useState([])

    return (
        <Autocomplete
            id="solicitante"
            name="solicitante"
            value={solicitanteSelect}
            onChange={(event, newValue) => {
                setSolicitanteSelect(newValue);
            }}
            options={usuarios}
            autoHighlight
            fullWidth
            //isOptionEqualToValue={(option) => option.coSatdesc}
            //getOptionLabel={(option) => option.coSatdesc !== undefined ? option.coSatdesc: ''}
            renderOption={(props, option) => (
                <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                    
                    {"usuario 1"}
                </Box>
            )}
            renderInput={(params) => (
                <TextField
                    required
                    {...params}
                    label="Solicitante"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}