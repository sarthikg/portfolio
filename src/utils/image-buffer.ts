import type { AstroImage } from "@schema/image";
import { readFileSync } from "fs";
import path from "path";

export async function getImageBuffer(imagePath: AstroImage): Promise<Buffer> {
  let imageAbsolutePath: string;
  if (process.env.NODE_ENV === "development") {
    imageAbsolutePath = imagePath.src.replace(/\?.*/, "").replace("/@fs", "");
  } else {
    imageAbsolutePath = imagePath.fsPath;
  }
  return readFileSync(path.resolve(imageAbsolutePath));
}
