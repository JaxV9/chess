import { ChessState, loadChessPosition } from "../reducers/chessPiecesSlice";
import { PreviewsState, updatePreviewedSquares } from "../reducers/previewedSquaresSlice";
import { ChessPiece, Game, Player } from "@/models/models";
import { GameState, startGame } from "../reducers/gameSlice";
import { WebsocketProvider } from "@/services/websocketProvider";
import { AppDispatch } from "../store";
import { PlayerState, putPlayer } from "../reducers/playerSlice";

export class Actions{

    constructor(
        private dispatch: AppDispatch,
        private selector: {
            chessPieces: ChessState,
            previewedSquares: PreviewsState,
            gameEngine: GameState;
            player: PlayerState;
        }
    ) {}

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

    public putPlayer(player: Player) {
        this.dispatch(putPlayer({player}));
    }

    public getPlayer(){
        const player = this.selector.player.player;
        return player;
    }

}