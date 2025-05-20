import { GuestServices } from "@/services/guest.services";
import { GuestUseCases } from "./guest.useCases";
import { Http } from "@/utils";

export const http = new Http();
export const guestServices = new GuestServices(http);
export const guestUseCases = new GuestUseCases(guestServices);