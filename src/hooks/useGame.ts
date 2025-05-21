import { UseCaseContext } from "@/contexts/contextsProvider";
import { Game } from "@/models/models";
import { useAppSelector } from "@/store/hooks";
import { useContext } from "react";


const useGame = () => {

    const gatewayUseCase = useContext(UseCaseContext);

    const gameInfo = useAppSelector((state) => state.gameEngine.game);

    const newGame = (newGame: Game) => {
        gatewayUseCase?.playerUseCases.startGame(newGame);
    }

    return {
        newGame,
        gameInfo
    };
}

export default useGame