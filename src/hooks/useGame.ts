import { Game } from "@/models/models";
import { useAppSelector } from "@/store/hooks";
import useUseCase from "./useUseCase";


const useGame = () => {

    const { gatewayUseCase } = useUseCase();

    const gameInfo = useAppSelector((state) => state.gameEngine.game);

    const newGame = (newGame: Game) => {
        gatewayUseCase.playerUseCases.startGame(newGame);
    }

    return {
        newGame,
        gameInfo
    };
}

export default useGame