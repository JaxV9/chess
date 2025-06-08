import { PieceRole } from "@/constants/constants";
import { ChessPiece } from "@/models/models";
import { RookDomain } from "./domain/pieces/rook";
import { PawnDomain } from "./domain/pieces/pawn";
import { KnightDomain } from "./domain/pieces/knight";
import { BishopDomain } from "./domain/pieces/bishop";
import { QueenDomain } from "./domain/pieces/queen";
import { KingDomain } from "./domain/pieces/king";
import { Actions } from "@/store/actions/actions";

export class GameEngineUseCases {
  constructor(
    private actions: Actions,
    private rookDomain: RookDomain,
    private pawnDomain: PawnDomain,
    private knightDomain: KnightDomain,
    private bishopDomain: BishopDomain,
    private queenDomain: QueenDomain,
    private kingDomain: KingDomain
  ) {}

  checkIfMoveIsValide(piece: ChessPiece, nextPos: number): boolean {
    switch (piece.role) {
      case PieceRole.pawn_black:
      case PieceRole.pawn_white:
        return this.pawnDomain.checkMove(nextPos, piece);
      case PieceRole.knight_black:
      case PieceRole.knight_white:
        return this.knightDomain.checkMove(nextPos, piece);
      case PieceRole.rook_black:
      case PieceRole.rook_white:
        return this.rookDomain.checkMove(nextPos, piece);
      case PieceRole.bishop_black:
      case PieceRole.bishop_white:
        return this.bishopDomain.checkMove(nextPos, piece);
      case PieceRole.queen_black:
      case PieceRole.queen_white:
        return this.queenDomain.checkMove(nextPos, piece);
      case PieceRole.king_black:
      case PieceRole.king_white:
        return this.kingDomain.checkMove(nextPos, piece);
    }
    return false;
  }

  getTokenGameSession(): string{
    return this.actions.getTokenGameSession();
  }
}
