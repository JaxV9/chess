import { fetchChess } from "@/service/service";
import { useAppDispatch } from "../hooks";
import { loadChessPosition, moveStore } from "../reducers/chessPiecesSlice";
import { updatePreviewedSquares } from "../reducers/previewedSquaresSlice";
import { Game } from "@/models/models";
import { startGame } from "../reducers/gameSlice";


export class Actions {

    dispatch = useAppDispatch();

    public getChess() {
        //Call the fetchService in websocket
        fetchChess()
            .then(chessPieces => {
                //Put the chess positions in the store
                this.dispatch(loadChessPosition({ chessPieces }))
            })
            .catch(error => {
                console.error("Error fetching chess pieces:", error);
            });
    }

    public updateChessPosition(chessId: string, chessPosition: number) {
        this.dispatch(moveStore({ id: chessId, pos: chessPosition }))
    }

    public displayTheChessboardPreview(chessPositions: number[] | null) {
        this.dispatch(updatePreviewedSquares(chessPositions))
    }

    public startGame(newGame: Game) {
        this.dispatch(startGame({newGame}))
    }

}