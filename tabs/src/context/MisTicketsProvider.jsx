import { createContext, useState } from "react";

const MisTicketsContext = createContext()

const MisTicketsProvider = ({ children }) => {
    // eslint-disable-next-line
    const [ titulo, setTitulo ] = useState('Solicitudes')
    
    return (
        <MisTicketsContext.Provider
            value={{
                titulo
            }}
        >
            {children}
        </MisTicketsContext.Provider>
    )
}

export {
    MisTicketsProvider
}

export default MisTicketsContext