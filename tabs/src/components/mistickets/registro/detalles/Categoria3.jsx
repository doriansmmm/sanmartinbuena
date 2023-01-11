import { useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

//importar hooks


export default function Categoria1() {



    const [subTipoSelect, setSubTipoSelect] = useState('')
    // eslint-disable-next-line
    const [subTipos, setSubTipos] = useState([])

    return (
        <Autocomplete
            id="subTipo"
            name="subTipo"
            value={subTipoSelect}
            onChange={(event, newValue) => {
                setSubTipoSelect(newValue);
            }}
            options={subTipos}
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
                    label="Sub tipo"
                    inputProps={{
                        ...params.inputProps,
                        autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                />
            )}
        />
    );
}