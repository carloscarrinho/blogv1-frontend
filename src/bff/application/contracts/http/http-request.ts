export interface HttpRequest {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  uri: string;
  headers?: object;
  params?: object;
  body?: any;
}
