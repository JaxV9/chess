import { Http } from "@/utils";

export class GuestServices {
  constructor(private http: Http) {}

  async createGuest(): Promise<Response> {
    try {
      const response = await this.http.post("guest");
      return response;
    } catch (error) {
      throw error;
    }
  }
}
