import axios from "axios";
import { HttpRequest } from "../../../../../../src/bff/application/contracts/http/http-request";
import { HttpResponse } from "../../../../../../src/bff/application/contracts/http/http-response";
import { HttpService } from "../../../../../../src/bff/application/contracts/http/http-service";
import { AxiosAdapter } from "../../../../../../src/bff/infrastructure/services/http-service/axios-adapter";

jest.mock("axios");

const makeSut = (): HttpService => {
  return new AxiosAdapter();
};

const makeRequest = (data?: Partial<HttpRequest>): HttpRequest => ({
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
  response: res?.response ?? undefined,
  headers: res?.headers ?? [],
  config: res?.config ?? {},
  data: res?.response ?? {},
  status: res?.response ?? 503,
  statusText: res?.response ?? undefined,
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

        it("Should return 400 if request is invalid", async () => {
          // Given
          const axiosAdapter = makeSut();
          const request = makeRequest();
          const axiosResponse = makeAxiosResponse({
            response: {
              status: 400,
              statusText: "Bad Request",
              data: {},
            },
          });

          jest.mocked(axios).mockImplementationOnce(() => {
            throw axiosResponse;
          });

          // When
          const httpResponse = await axiosAdapter.request(request);

          // Then
          expect(httpResponse.statusCode).toBe(400);
        });

        it("Should return 503 if service does not respond", async () => {
          // Given
          const axiosAdapter = makeSut();
          const request = makeRequest({ uri: "" });
          const axiosResponse = makeAxiosResponse({
            response: undefined,
          });

          jest.mocked(axios).mockImplementationOnce(() => {
            throw axiosResponse;
          });

          // When
          const httpResponse = await axiosAdapter.request(request);

          // Then
          expect(httpResponse.statusCode).toBe(503);
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
