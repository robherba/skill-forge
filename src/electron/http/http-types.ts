export type HttpStatusCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

export const HttpStatusMessage: Record<HttpStatusCode, string> = {
  200: "OK",
  201: "Created",
  400: "Bad Request",
  401: "Unauthorized",
  403: "Forbidden",
  404: "Not Found",
  500: "Internal Server Error",
};
