import { Http, ResAction } from "@/utils";

export type CreateGuest = {
  id: string,
  username: string,
}

export class GuestServices {
  constructor(private http: Http) {}

  async createGuest(): Promise<ResAction> {
    const response = await this.http.post("guest");
    response.payload as unknown as CreateGuest
    return response
  }
}
