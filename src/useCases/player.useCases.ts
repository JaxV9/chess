import { PieceRole } from "@/constants/constants";
import { ChessPiece, Game, Player } from "@/models/models";
import { Actions } from "@/store/actions/actions";
import { RookDomain } from "./domain/pieces/rook";
import { PawnDomain } from "./domain/pieces/pawn";
import { KnightDomain } from "./domain/pieces/knight";
import { BishopDomain } from "./domain/pieces/bishop";
import { QueenDomain } from "./domain/pieces/queen";
import { KingDomain } from "./domain/pieces/king";
import { GuestServices } from "@/services/guest.services";
import { Failure, Success } from "@/utils";

export class PlayerUseCases {
  constructor(
    private actions: Actions,
    private rookDomain: RookDomain,
    private pawnDomain: PawnDomain,
    private knightDomain: KnightDomain,
    private bishopDomain: BishopDomain,
    private queenDomain: QueenDomain,
    private kingDomain: KingDomain,
    private guestServices: GuestServices
  ) {}

  getChess() {
    this.actions.getChess();
  }

  updateChessPosition(chess: ChessPiece): void {
    this.actions.updateChessPosition(chess);
  }

  updateTheChessboardPreview(chessPositions: number[] | null): void {
    this.actions.displayTheChessboardPreview(chessPositions);
  }

  previewedSquares(index: number, chessPiece: ChessPiece) {
    switch (chessPiece.role) {
      case PieceRole.pawn_black:
      case PieceRole.pawn_white:
        return this.updateTheChessboardPreview(
          this.pawnDomain.preview(index, chessPiece)
        );
      case PieceRole.knight_black:
      case PieceRole.knight_white:
        return this.updateTheChessboardPreview(
          this.knightDomain.preview(index, chessPiece)
        );
      case PieceRole.rook_black:
      case PieceRole.rook_white:
        return this.updateTheChessboardPreview(this.rookDomain.preview(index));
      case PieceRole.bishop_black:
      case PieceRole.bishop_white:
        return this.updateTheChessboardPreview(
          this.bishopDomain.preview(index)
        );
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

  private putPlayer(player: Player) {
    return this.actions.putPlayer(player);
  }

  async createPlayerAsGuest(): Promise<Success | Failure> {
    const response = await this.guestServices.createGuest();
    if (response.status === "Failure") {
      return response.status;
    }
    const payload = response.payload as Player;
    const player = {
        id: payload.id,
        username: payload.username,
        isGuest: true,
      }
    this.actions.putPlayer(player);
    localStorage.setItem("player", JSON.stringify(player));
    return response.status;
  }

  getPlayer(): Player | null {
    return this.actions.getPlayer();
  }
}
