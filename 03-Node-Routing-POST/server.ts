import http, { request, Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "application/json");

    // URL & POST
    if (request.url === "/user" && request.method === "POST") {
      try {
        let body: any = "";
        request
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            let formData = JSON.parse(body);
            response.end(`<pre>${JSON.stringify(formData)}</pre>`);
          });
      } catch (error) {
        console.error(error);
      }
    }

    // response.end(
    //   `<pre style="font-family: Lato,sans-serif; color:blue"></pre>`
    // );
  }
);

server.listen(port, hostname, () => {
  console.log(`Node Js Server is up and running!!!`);
});
