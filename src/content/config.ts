import { articleSchema } from "@schema/article";
import { experienceSchema } from "@schema/experience";
import { sideQuestSchema } from "@schema/side-quests";

export const collections = {
  article: articleSchema,
  experience: experienceSchema,
  "side-quest": sideQuestSchema,
};
