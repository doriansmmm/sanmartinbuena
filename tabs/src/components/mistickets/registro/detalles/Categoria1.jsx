import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//importar hooks


export default function Categoria1() {



    const [areaSelect, setAreaSelect] = useState('')
    // eslint-disable-next-line
    const [areas, setAreas] = useState([])

    return (
        <Autocomplete
            id="area"
            name="area"
            value={areaSelect}
            onChange={(event, newValue) => {
                setAreaSelect(newValue);
            }}
            options={areas}
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
                    label="Área"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}