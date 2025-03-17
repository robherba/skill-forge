import { WhoAmI } from "./api/api-user.js";

export interface ApiEndpointMapping {
  'api:user:whoAmI': WhoAmI;
  'api:coda:webChefSkillSheet': unknown;
}
