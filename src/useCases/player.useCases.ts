import { PieceRole } from "@/constants/constants";
import { ChessPiece, Game } from "@/models/models";
import { Actions } from "@/store/actions/actions";
import { RookDomain } from "./domain/pieces/rook";
import { PawnDomain } from "./domain/pieces/pawn";
import { KnightDomain } from "./domain/pieces/knight";
import { BishopDomain } from "./domain/pieces/bishop";
import { QueenDomain } from "./domain/pieces/queen";
import { KingDomain } from "./domain/pieces/king";

export class PlayerUseCases {

    constructor(
        private actions: Actions,
        private rookDomain: RookDomain,
        private pawnDomain: PawnDomain,
        private knightDomain: KnightDomain,
        private bishopDomain: BishopDomain,
        private queenDomain: QueenDomain,
        private kingDomain: KingDomain
    ) {}

    getChess() {
        this.actions.getChess();
    }

    updateChessPosition(chess: ChessPiece): void {
        this.actions.updateChessPosition(chess);
    }

    updateTheChessboardPreview(chessPositions: number[] | null): void{
        this.actions.displayTheChessboardPreview(chessPositions)
    }

    previewedSquares(index: number, chessPiece: ChessPiece) {
        switch (chessPiece.role) {
            case PieceRole.pawn_black:
            case PieceRole.pawn_white:
                return this.updateTheChessboardPreview(this.pawnDomain.preview(index, chessPiece))
            case PieceRole.knight_black:
            case PieceRole.knight_white:
                return this.updateTheChessboardPreview(this.knightDomain.preview(index, chessPiece));
            case PieceRole.rook_black:
            case PieceRole.rook_white:
                return this.updateTheChessboardPreview(this.rookDomain.preview(index));
            case PieceRole.bishop_black:
            case PieceRole.bishop_white:
                return this.updateTheChessboardPreview(this.bishopDomain.preview(index));
            case PieceRole.queen_black:
            case PieceRole.queen_white:
                return this.updateTheChessboardPreview(this.queenDomain.preview(index));
            case PieceRole.king_black:
            case PieceRole.king_white:
                return this.updateTheChessboardPreview(this.kingDomain.preview(index));
        }
    }
    
    startGame(newGame: Game): void {
        this.actions.startGame(newGame);
    }

}