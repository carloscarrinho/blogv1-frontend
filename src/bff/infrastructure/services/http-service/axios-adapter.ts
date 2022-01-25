import { HttpRequest } from "../../../application/contracts/http/http-request";
import { HttpResponse } from "../../../application/contracts/http/http-response";
import { HttpService } from "../../../application/contracts/http/http-service";

export class AxiosAdapter implements HttpService {
  async request(options: HttpRequest): Promise<HttpResponse> {
    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
      },
      body: {},
    };
  }
}
