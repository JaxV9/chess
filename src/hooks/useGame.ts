import { Game } from "@/models/models";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { gameEngine } from "@/store/reducers/gameSlice";


const useGame = () => {
    //store
    const dispatch = useAppDispatch();

    const gameInfo = useAppSelector((state) => state.gameEngine.game);

    const newGame = (newGame: Game) => {
        dispatch(gameEngine.newGame({newGame}))
    }

    return {
        newGame,
        gameInfo
    };
}

export default useGame