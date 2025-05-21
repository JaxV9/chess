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

export const http = new Http();
export const actions = new Actions();

export const rookDomain = new RookDomain();
export const pawnDomain = new PawnDomain();
export const bishopDomain = new BishopDomain();
export const knightDomain = new KnightDomain();
export const queenDomain = new QueenDomain();
export const kingDomain = new KingDomain();

export const guestServices = new GuestServices(http);
export const guestUseCases = new GuestUseCases(guestServices);
export const gameEngineUseCases = new GameEngineUseCases(
    rookDomain, pawnDomain, knightDomain, bishopDomain, queenDomain, kingDomain
);
export const playerUseCases = new PlayerUseCases(
    actions, rookDomain, pawnDomain, knightDomain, bishopDomain, queenDomain, kingDomain
);