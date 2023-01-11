import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//importar hooks


export default function CentroCostos() {



    const [centroCostosSelect, setCentroCostosSelect] = useState('')
    // eslint-disable-next-line
    const [centroCostos, setCentroCostos] = useState([])

    return (
        <Autocomplete
            id="centroCostos"
            name="centroCostos"
            value={centroCostosSelect}
            onChange={(event, newValue) => {
                setCentroCostosSelect(newValue);
            }}
            options={centroCostos}
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
                    label="Centro de costos"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}