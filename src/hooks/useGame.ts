import { Game } from "@/models/models";
import { useAppSelector } from "@/store/hooks";
import { playerUseCases } from "@/useCases/gateway.useCases";


const useGame = () => {

    const gameInfo = useAppSelector((state) => state.gameEngine.game);

    const newGame = (newGame: Game) => {
        playerUseCases.startGame(newGame)
    }

    return {
        newGame,
        gameInfo
    };
}

export default useGame