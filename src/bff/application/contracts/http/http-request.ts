export interface HttpRequest {
  method: "GET" | "POST" | "PUT" | "PATCH" | "DELETE";
  uri: string;
  headers?: any;
  params?: any;
  body?: any;
}
