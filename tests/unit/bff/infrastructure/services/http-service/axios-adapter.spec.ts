import axios from "axios";
import { HttpRequest } from "../../../../../../src/bff/application/contracts/http/http-request";
import { HttpResponse } from "../../../../../../src/bff/application/contracts/http/http-response";
import { HttpService } from "../../../../../../src/bff/application/contracts/http/http-service";
import { AxiosAdapter } from "../../../../../../src/bff/infrastructure/services/http-service/axios-adapter";

jest.mock("axios");

const makeSut = (): HttpService => {
  return new AxiosAdapter();
};

const makeRequest = (data?: HttpRequest): HttpRequest => ({
  method: data?.method ?? "GET",
  uri: data?.uri ?? "any_url",
  headers: data?.headers ?? { "Content-Type": "application/json" },
  params: data?.params ?? {},
  body: data?.params ?? {},
});

// const makeResponse = (data?: Partial<HttpResponse>): HttpResponse => ({
//   statusCode: data.statusCode ?? 200,
//   headers: data.headers ?? { "Content-Type": "application/json" },
//   body: data.body ?? {},
// });

const makeAxiosResponse = (res?: any) => ({
  data: res?.data ?? {},
  status: res?.status ?? 200,
  statusText: res?.statusText ?? "any_text",
  headers: res?.headers ?? [],
  config: res?.config ?? {},
});

describe("Unit", () => {
  describe("BFF Infrastructure", () => {
    describe("Services: HttpService", () => {
      describe("AxiosAdapter.request()", () => {
        it("Should call axios with provided data", async () => {
          // Given
          const axiosAdapter = makeSut();
          const request = makeRequest();
          const axiosSpy = jest.mocked(axios);

          // When
          await axiosAdapter.request(request);

          // Then
          expect(axiosSpy).toHaveBeenCalledWith({
            method: request.method,
            url: request.uri,
            headers: request.headers,
            params: request.params,
            data: request.body,
          });
        });

        it("Should return 200 if request succeeds", async () => {
          // Given
          const axiosAdapter = makeSut();
          const request = makeRequest();
          const axiosResponse = makeAxiosResponse();
          jest.mocked(axios).mockResolvedValueOnce(axiosResponse);

          // When
          const httpResponse = await axiosAdapter.request(request);

          // Then
          expect(httpResponse.statusCode).toBe(200);
        });
      });
    });
  });
});
