import { GuestServices } from "@/services/guest.services";
import { GuestUseCases } from "./guest.useCases";
import { Http } from "@/utils";
import { Actions } from "@/store/actions/actions";
import { PlayerUseCases } from "./player.useCases";
import { RookDomain } from "./domain/pieces/rook";
import { PawnDomain } from "./domain/pieces/pawn";
import { BishopDomain } from "./domain/pieces/bishop";
import { QueenDomain } from "./domain/pieces/queen";
import { KingDomain } from "./domain/pieces/king";
import { KnightDomain } from "./domain/pieces/knight";
import { GameEngineUseCases } from "./gameEngine.useCases";
import { AppDispatch } from "@/store/store";

export class GatewayUseCase {
    guestUseCases: GuestUseCases;
    playerUseCases: PlayerUseCases;
    gameEngineUseCases: GameEngineUseCases;
  
    constructor(dispatch: AppDispatch) {
      const actions = new Actions(dispatch);
      const http = new Http();
  
      const rookDomain = new RookDomain();
      const pawnDomain = new PawnDomain();
      const bishopDomain = new BishopDomain();
      const queenDomain = new QueenDomain();
      const kingDomain = new KingDomain();
      const knightDomain = new KnightDomain();
      const guestServices = new GuestServices(http);
  
      this.guestUseCases = new GuestUseCases(guestServices);
      this.playerUseCases = new PlayerUseCases(
        actions, rookDomain, pawnDomain, knightDomain, bishopDomain, queenDomain, kingDomain
      );
      this.gameEngineUseCases = new GameEngineUseCases(
        rookDomain, pawnDomain, knightDomain, bishopDomain, queenDomain, kingDomain
      );
    }
  }