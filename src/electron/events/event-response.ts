import { HttpStatusCode, HttpStatusMessage } from "../http/http-types.js";
import { EventPayloadMapping } from "./event-types.js";

interface Response {
  status: number;
  message: string | undefined;
  data: EventPayloadMapping[keyof EventPayloadMapping] | undefined;
};

export default class EventResponse<T extends EventPayloadMapping[keyof EventPayloadMapping]> {

  constructor(
    public data: T | undefined = undefined,
    public status: HttpStatusCode = 200,
    public message: string | undefined = HttpStatusMessage[this.status],
  ) {}

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
