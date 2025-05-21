import { GuestServices } from "@/services/guest.services";

export class GuestUseCases {

    constructor(private guestServices: GuestServices) {}
    
    async createGuest() {
        const response = await this.guestServices.createGuest();
        return response;
    }
}