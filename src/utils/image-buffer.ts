import { readFileSync } from "fs";
import path from "path";
import fetch from "node-fetch";

export async function getImageBuffer(imagePath: string): Promise<Buffer> {
  if (process.env.NODE_ENV === "development") {
    return readFileSync(
      path.resolve(imagePath.replace(/\?.*/, "").replace("/@fs", "")),
    );
  }
  const response = await fetch(
    imagePath.replace("/", `${import.meta.env.SITE}_vercel/image?url=`) +
      "?width=1200&height=630",
  );
  return await response.buffer();
}
