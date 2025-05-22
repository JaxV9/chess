import { GameEngineUseCases } from "./gameEngine.useCases";
import { GuestUseCases } from "./guest.useCases";
import { PlayerUseCases } from "./player.useCases";


export class GatewayUseCase {
  
    constructor(
      public playerUseCases: PlayerUseCases,
      public gameEngineUseCases: GameEngineUseCases,
      public guestUseCases: GuestUseCases
    ) {}
  }