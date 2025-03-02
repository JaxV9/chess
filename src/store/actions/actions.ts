import { useAppDispatch } from "../hooks";
import { loadChessPosition, moveStore } from "../reducers/chessPiecesSlice";
import { updatePreviewedSquares } from "../reducers/previewedSquaresSlice";
import { Game } from "@/models/models";
import { startGame } from "../reducers/gameSlice";
import { WebsocketProvider } from "@/service/websocketProvider";


export class Actions{

    dispatch = useAppDispatch();
    websocketProvider = new WebsocketProvider();

    public getChess() {
        this.websocketProvider.ConnectAndListenning("/ws/chess", (chessPieces) => {
            this.dispatch(loadChessPosition({ chessPieces }));
            console.log("Chess pieces updated:", chessPieces);
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