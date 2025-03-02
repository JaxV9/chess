import { Actions } from "@/store/actions/actions";
import { useEffect, useRef } from "react";

const useWebSocket = () => {

    const actionsRef = useRef(new Actions());

    useEffect(() => {
        actionsRef.current.getChess()
    },[])

}

export default useWebSocket;