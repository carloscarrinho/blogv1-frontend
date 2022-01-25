import { HttpRequest } from "./http-request";
import { HttpResponse } from "./http-response";

export interface HttpService {
  request(options: HttpRequest): Promise<HttpResponse>;
}
