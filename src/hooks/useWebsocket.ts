import { UseCaseContext } from "@/contexts/contextsProvider";
import { useContext, useEffect } from "react";

const useWebSocket = () => {
  const gatewayUseCase = useContext(UseCaseContext);
  useEffect(() => {
    gatewayUseCase?.playerUseCases.getChess();
  });
};

export default useWebSocket;
