export interface WhoAmI {
  name: string;
  email: string;
  pictureLink: string;
}

export interface EventPayloadMapping {
  login: WhoAmI;
}
