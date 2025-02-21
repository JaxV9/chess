import { Game } from "@/models/models";
import { Actions } from "@/store/actions/actions";
import { useAppSelector } from "@/store/hooks";
import { useRef } from "react";


const useGame = () => {

    //store actions
    const actionsRef = useRef(new Actions());

    const gameInfo = useAppSelector((state) => state.gameEngine.game);

    const newGame = (newGame: Game) => {
        actionsRef.current.startGame(newGame);
    }

    return {
        newGame,
        gameInfo
    };
}

export default useGame