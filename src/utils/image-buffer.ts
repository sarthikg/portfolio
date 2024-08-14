import { readFileSync } from "fs";
import path from "path";
import fetch from "node-fetch";

export async function getImageBuffer(imagePath: string): Promise<Buffer> {
  if (process.env.NODE_ENV === "development") {
    const imageAbsolutePath = imagePath.replace(/\?.*/, "").replace("/@fs", "");
    return readFileSync(path.resolve(imageAbsolutePath));
  }
  const imageAbsolutePath =
    imagePath.replace("/", `${import.meta.env.SITE}_vercel/image?url=`) +
    "?width=1200&height=630";
  console.log(process.env.VERCEL_URL);
  console.log(imageAbsolutePath);
  const response = await fetch(imageAbsolutePath);
  return await response.buffer();
}
