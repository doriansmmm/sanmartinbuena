import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//importar hooks


export default function SedeProyecto() {



    const [sedeSelect, setSedeSelect] = useState('')
    // eslint-disable-next-line
    const [sede, setSede] = useState([])

    return (
        <Autocomplete
            id="sede"
            name="sede"
            value={sedeSelect}
            onChange={(event, newValue) => {
                setSedeSelect(newValue);
            }}
            options={sede}
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
                    label="Sede o proyecto"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}