import { useEffect } from "react";
import useUseCase from "./useUseCase";

const useWebSocket = () => {
  const { gatewayUseCase } = useUseCase();

  useEffect(() => {
    gatewayUseCase.playerUseCases.getChess();
  });
};

export default useWebSocket;
