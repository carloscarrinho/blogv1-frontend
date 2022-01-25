import { HttpService } from "../../../../../../src/bff/application/contracts/http/http-service";
import { BlogService } from "../../../../../../src/bff/infrastructure/services/blog-service/blog-service";

const makeSut = ({ request }: { request?: Function }): BlogService => {
  const httpService = {
    request: request ?? jest.fn().mockResolvedValueOnce({ statusCode: 200 }),
  } as unknown as HttpService;

  return new BlogService(httpService);
};

describe("Unit", () => {
  describe("Infrastructure Services", () => {
    describe("Blog Service", () => {
      describe("getArticles()", () => {
        it("Should call HttpService with correct options", async () => {
          // Given
          const dependencies = { request: jest.fn().mockResolvedValueOnce({ statusCode: 200 }) };
          const blogService = makeSut(dependencies);
          const httpRequest = {
            method: "GET",
            uri: "http://localhost:3333/articles",
            headers: { "Content-Type": "application/json" },
          };

          // When
          await blogService.getArticles();

          // Then
          expect(dependencies.request).toHaveBeenCalledWith(httpRequest);
        });

        it("Should return an empty array if response statusCode is not 200", async () => {
          // Given
          const blogService = makeSut({
            request: jest.fn().mockResolvedValueOnce({ statusCode: 400 }),
          });

          // When
          const result = await blogService.getArticles();

          // Then
          expect(result).toEqual([]);
        });
      });
    });
  });
});
