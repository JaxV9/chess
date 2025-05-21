import { useAppDispatch } from "../hooks";
import { loadChessPosition } from "../reducers/chessPiecesSlice";
import { updatePreviewedSquares } from "../reducers/previewedSquaresSlice";
import { ChessPiece, Game } from "@/models/models";
import { startGame } from "../reducers/gameSlice";
import { WebsocketProvider } from "@/services/websocketProvider";


export class Actions{

    constructor(private dispatch: ReturnType<typeof useAppDispatch>) {}

    websocketProvider = WebsocketProvider.getInstance();

    public getChess() {
        this.websocketProvider.ConnectAndListenning("/ws/chess", (chessPieces) => {
            this.dispatch(loadChessPosition({ chessPieces }));
        });
    }

    public updateChessPosition(chess: ChessPiece) {
        const formatData: {
            action: string,
            pieces: ChessPiece[]
        } = {
            action: "move",
            pieces: [chess]
        }
        this.websocketProvider.sendMessage(formatData)
    }

    public displayTheChessboardPreview(chessPositions: number[] | null) {
        this.dispatch(updatePreviewedSquares(chessPositions))
    }

    public startGame(newGame: Game) {
        this.dispatch(startGame({newGame}))
    }

}