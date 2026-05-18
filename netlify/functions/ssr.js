import ssr from "../../dist/server/server.js";

export default async (request, context) => {
  try {
    return await ssr.fetch(request, {}, context);
  } catch (e) {
    return new Response("SSR Error: " + e.message, { status: 500 });
  }
};
