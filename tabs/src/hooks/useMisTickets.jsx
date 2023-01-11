import { useContext } from "react";

import MisTicketsContext from "../context/MisTicketsProvider";

const useMisTickets = () => {
    return useContext(MisTicketsContext)
}

export default useMisTickets