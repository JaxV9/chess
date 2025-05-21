import { ChessPiece, Game } from "@/models/models";
import { Actions } from "@/store/actions/actions";

export class PlayerUseCases {

    constructor(private actions: Actions) {}

    getChess() {
        this.actions.getChess();
    }


    updateChessPosition(chess: ChessPiece): void {
        this.actions.updateChessPosition(chess);
    }

    displayTheChessboardPreview(chessPositions: number[] | null): void{
        this.actions.displayTheChessboardPreview(chessPositions)
    }
    
    startGame(newGame: Game): void {
        this.actions.startGame(newGame);
    }

}