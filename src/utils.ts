export class Http {
  constructor(private baseUrl: string = "http://127.0.0.1:8000/") {}

  async post(path: string, payload?: object | null): Promise<Response> {
    const response = await fetch(`${this.baseUrl + path}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload ?? {}),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response;
  }

  async get(path: string): Promise<Response> {
    const response = await fetch(`${this.baseUrl + path}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response;
  }

  async patch(path: string, payload: object | null): Promise<Response> {
    const response = await fetch(`${this.baseUrl + path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload ?? {}),
      });
  
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response;
  }
}
