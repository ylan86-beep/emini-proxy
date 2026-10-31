export default async (request) => {
  const url = new URL(request.url);
  if (url.pathname === "/" || url.pathname === "/favicon.ico") {
    return new Response(null, { status: 204 });
  }

  url.host = "generativelanguage.googleapis.com";
  url.protocol = "https:";

  const newReq = new Request(url.toString(), {
    method: request.method,
    headers: request.headers,
    body: request.body,
  });

  const res = await fetch(newReq);
  return new Response(res.body, {
    status: res.status,
    headers: res.headers,
  });
};
