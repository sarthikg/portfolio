export const prerender = true;

import type { APIRoute } from "astro";
import { ImageResponse } from "@vercel/og";
import { Thumbnail } from "@component/Thumbnail";
import { readFileSync } from "fs";
import path from "path";

import { getAllPublishedArticles } from "@facade/article";
import { createElement } from "react";
import type { AstroImage } from "@schema/image";
import { getImageBuffer } from "@util/image-buffer";
import { getSideQuests } from "@facade/side-quest";

type Props = {
  title: string;
  description: string;
  image: {
    src: AstroImage;
    alt: string;
  };
};

export const GET: APIRoute<Props> = async ({ props }) => {
  const neuzeit700 = readFileSync("./public/fonts/neuzeit-bold.otf");
  const neuzeit400 = readFileSync("./public/fonts/neuzeit-regular.otf");
  const profilePicPath = "@asset/images/pfp.jpeg";
  const coverPicPath = props.image;
  const coverPic = await getImageBuffer(coverPicPath.src);

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
  const sideQuests = await getSideQuests();
  return [...articles, ...sideQuests].map((article) => ({
    params: { slug: article.data.slug },
    props: {
      title: article.data.title,
      description: article.data.description,
      image: article.data.image,
    },
  }));
}
