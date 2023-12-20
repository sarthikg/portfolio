import { z } from "astro/zod";
import type { APIContext, Props } from "astro";
import { zfd } from "zod-form-data";

export const prerender = false;

const formSchema = zfd.formData({
  name: zfd.text(),
  email: zfd.text(z.string().email()),
  subject: zfd.text(),
  message: zfd.text().optional(),
});

export async function POST({ request }: APIContext<Props>): Promise<Response> {
  try {
    const data = await request.formData();
    const parsedData = formSchema.parse(data);
    console.log(parsedData);
  } catch (error) {
    console.log(error);
    return new Response("Submitted!", { status: 200 });
    // if (error instanceof z.ZodError) {
    //   return new Response(JSON.stringify(error.format()), { status: 400 });
    // }
    // return new Response("Submitted!", { status: 200 });
  }
}
