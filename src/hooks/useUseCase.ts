import { GuestServices } from "@/services/guest.services";
import { Actions } from "@/store/actions/actions";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { BishopDomain } from "@/useCases/domain/pieces/bishop";
import { KingDomain } from "@/useCases/domain/pieces/king";
import { KnightDomain } from "@/useCases/domain/pieces/knight";
import { PawnDomain } from "@/useCases/domain/pieces/pawn";
import { QueenDomain } from "@/useCases/domain/pieces/queen";
import { RookDomain } from "@/useCases/domain/pieces/rook";
import { GameEngineUseCases } from "@/useCases/gameEngine.useCases";
import { GatewayUseCase } from "@/useCases/gateway.useCases";
import { PlayerUseCases } from "@/useCases/player.useCases";
import { Http } from "@/utils";

const useUseCase = () => {
    const dispatch = useAppDispatch();
    const http = new Http();
    const actions = new Actions(dispatch, useAppSelector);

    const rookDomain = new RookDomain();
    const pawnDomain = new PawnDomain();
    const bishopDomain = new BishopDomain();
    const queenDomain = new QueenDomain();
    const kingDomain = new KingDomain();
    const knightDomain = new KnightDomain();

    const guestServices = new GuestServices(http);

    const playerUseCases = new PlayerUseCases(
    actions, rookDomain, pawnDomain, knightDomain, bishopDomain, queenDomain, kingDomain, guestServices
    );
    const gameEngineUseCases = new GameEngineUseCases(
    rookDomain, pawnDomain, knightDomain, bishopDomain, queenDomain, kingDomain
    );

    const gatewayUseCase = new GatewayUseCase(
        playerUseCases, gameEngineUseCases
    )

    return { gatewayUseCase };
};

export default useUseCase;
