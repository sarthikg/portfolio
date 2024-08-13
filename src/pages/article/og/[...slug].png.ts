export const prerender = true;

import type { APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";
import { Thumbnail } from "@component/Thumbnail";
import { readFileSync } from "fs";
import path from "path";

import { getAllPublishedArticles } from "@facade/article";
import { createElement } from "react";

type Props = {
  title: string;
  description: string;
  image: {
    src: {
      src?: string;
      width?: number;
      height?: number;
      format?:
        | "png"
        | "jpg"
        | "jpeg"
        | "tiff"
        | "webp"
        | "gif"
        | "svg"
        | "avif";
    };
    alt: string;
  };
};

export const GET: APIRoute<Props> = ({ props }) => {
  const neuzeit700 = readFileSync("./public/fonts/neuzeit-bold.otf");
  const neuzeit400 = readFileSync("./public/fonts/neuzeit-regular.otf");
  const profilePicPath = "@asset/images/profile-pic.png";
  const coverPicPath = props.image;

  const coverPic = readFileSync(
    process.env.NODE_ENV === "development"
      ? path.resolve(
          coverPicPath.src.src.replace(/\?.*/, "").replace("/@fs", ""),
        )
      : path.resolve(coverPicPath.src.src.replace("/", "dist/server/")),
  );

  const profilePic = readFileSync(
    path.resolve(
      profilePicPath.replace(/\?.*/, "").replace("@asset", "src/assets"),
    ),
  );

  return new ImageResponse(
    createElement(Thumbnail, {
      ...props,
      profilePic,
      coverPic,
    }),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Neuzeit Grotesk",
          data: neuzeit700,
          style: "normal",
          weight: 700,
        },
        {
          name: "Neuzeit Grotesk",
          data: neuzeit400,
          style: "normal",
          weight: 400,
        },
      ],
    },
  );
};

export async function getStaticPaths() {
  const articles = await getAllPublishedArticles();
  return articles.map((article) => ({
    params: { slug: article.slug },
    props: {
      title: article.data.title,
      description: article.data.description,
      image: article.data.image,
    },
  }));
}
