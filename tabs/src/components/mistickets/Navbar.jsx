import { Fragment } from 'react';

import {
  Tooltip,
  Container,
  IconButton,
  Toolbar,
  Box,
  AppBar,
  Typography,
  Grid,
  CssBaseline
} from '@mui/material';

import { Link, useHistory } from 'react-router-dom'

import Logosanmartin from "../../archivos/logosanmartin.png"
import Botonregresar from "../../archivos/botonregresar.png"
import Botonhome from "../../archivos/botonhome.png"

import useMisTickets from '../../hooks/useMisTickets';

function Navbar() {
  
  const history = useHistory();
  const { titulo } = useMisTickets()

  return (
    <Fragment>
      <CssBaseline />
      <AppBar position="static" style={{ background: "#fff" }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip style={{ right: 0 }} title="">
                <IconButton sx={{ p: 0 }}>
                  <img height={40} width={80} src={Logosanmartin} alt="logo san martin" />
                </IconButton>
              </Tooltip>
            </Box>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <Typography variant="h4" color="black" component="div">
                {titulo}
              </Typography>
            </Grid>
            <Box sx={{ flexGrow: 1 }}>
              <Tooltip style={{ right: 0 }} title="">
                <IconButton sx={{ p: 1 }}>
                  <img height={40} width={40} onClick={() => history.push("/tabb")} src={Botonregresar} alt="logo mabe" />
                </IconButton>

              </Tooltip>

            </Box>
            <Box sx={{ flexGrow: 1 }}>
              <Tooltip style={{ right: 0 }} title="">
                <IconButton sx={{ p: 0 }}>
                  <img height={40} width={40} onClick={() => history.push("/Privacy")} src={Botonhome} alt="logo mabe" />
                </IconButton>

              </Tooltip>

            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </Fragment>
  );
}
export default Navbar;