import axios from "axios";
import { HttpRequest } from "../../../application/contracts/http/http-request";
import { HttpResponse } from "../../../application/contracts/http/http-response";
import { HttpService } from "../../../application/contracts/http/http-service";

export class AxiosAdapter implements HttpService {
  async request(options: HttpRequest): Promise<HttpResponse> {
    try {
      const response = await axios({
        method: options.method,
        url: options.uri,
        headers: options.headers,
        params: options.params,
        data: options.body,
      });

      return {
        statusCode: 200,
        headers: {
          "Content-Type": "application/json",
        },
        body: {},
      };
    } catch (error) {
      if (!error.response) return { statusCode: 503, body: {} };

      return {
        statusCode: error.response.status,
        body: error.response.data,
      };
    }
  }
}
