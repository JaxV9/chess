import { playerUseCases } from "@/useCases/gateway.useCases";
import { useEffect } from "react";

const useWebSocket = () => {

    useEffect(() => {
        playerUseCases.getChess()
    },[])

}

export default useWebSocket;