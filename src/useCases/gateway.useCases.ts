import { GuestServices } from "@/services/guest.services";
import { GuestUseCases } from "./guest.useCases";
import { Http } from "@/utils";
import { Actions } from "@/store/actions/actions";
import { PlayerUseCases } from "./player.useCases";

export const http = new Http();
export const actions = new Actions();
export const guestServices = new GuestServices(http);
export const guestUseCases = new GuestUseCases(guestServices);
export const playerUseCases = new PlayerUseCases(actions);