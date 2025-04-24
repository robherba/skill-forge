import { SkillMap } from "./api/api-coda.js";
import { WhoAmI } from "./api/api-user.js";

export interface ApiEndpointMapping {
  'api:user:whoAmI': WhoAmI;
  'api:coda:webChefSkillSheet': SkillMap;
}
