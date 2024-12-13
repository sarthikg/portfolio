import { articleSchema } from "@schema/article";
import { experienceSchema } from "@schema/experience";
import { pageInfoSchema } from "@schema/page-info";
import { sideQuestSchema } from "@schema/side-quests";

export const collections = {
  article: articleSchema,
  experience: experienceSchema,
  "side-quest": sideQuestSchema,
  "page-info": pageInfoSchema,
};
