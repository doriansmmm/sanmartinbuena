import { MisTicketsProvider } from '../../../context/MisTicketsProvider'

import Navbar from '../Navbar';
import Formulario from './Formulario';

export default function Registro() {
    return (
        <div>
            <MisTicketsProvider>
                <Navbar />
                <Formulario/>
            </MisTicketsProvider>
        </div>
    )
}