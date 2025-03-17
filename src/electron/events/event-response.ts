import { ApiEndpointMapping } from "../api-endpoints.js";
import { HttpStatusCode, HttpStatusMessage } from "../http/http-types.js";

interface Response {
  status: number;
  message?: string;
  data?: ApiEndpointMapping[keyof ApiEndpointMapping];
};

export default class EventResponse<T extends ApiEndpointMapping[keyof ApiEndpointMapping]> {

  constructor(
    public data: T | undefined = undefined,
    public status: HttpStatusCode = 200,
    public message: string | undefined = undefined,
  ) {
    this.message = this.message ?? HttpStatusMessage[this.status];
  }

  setStatus(status: HttpStatusCode) {
    this.status = status;
  }

  setMessage(message: string) {
    this.message = message;
  }

  setData(data: T) {
    this.data = data;
  }

  getResponse(): Response {
    return {
      status: this.status,
      message: this.message,
      data: this.data,
    }
  }

}
