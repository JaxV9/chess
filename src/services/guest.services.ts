import { Http, ResAction } from "@/utils";

export class GuestServices {
  constructor(private http: Http) {}

  async createGuest(): Promise<ResAction> {
    const response = await this.http.post("guest");
    return response
  }
}
