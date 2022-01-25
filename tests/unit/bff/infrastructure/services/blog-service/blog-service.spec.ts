import { HttpService } from "../../../../../../src/bff/application/contracts/http/http-service";
import { BlogService } from "../../../../../../src/bff/infrastructure/services/blog-service/blog-service";

const makeSut = ({ request }: { request?: Function }): BlogService => {
  const httpService = {
    request,
  } as unknown as HttpService;

  return new BlogService(httpService);
};

describe("Unit", () => {
  describe("Infrastructure Services", () => {
    describe("Blog Service", () => {
      describe("getArticles()", () => {
        it("Should call HttpService", async () => {
          // Given
          const dependencies = { request: jest.fn() };
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
      });
    });
  });
});
