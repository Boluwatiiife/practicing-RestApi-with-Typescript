import http, { request, Server, IncomingMessage, ServerResponse } from "http";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // URL & POST
    if (request.url === "/login" && request.method === "POST") {
      try {
        let body: any = "";
        request
          .on("data", (chunk) => {
            body += chunk;
          })
          .on("end", () => {
            let formData = JSON.parse(body);
            if (
              formData.name === "Boluwatife" &&
              formData.password === "qwert1234"
            ) {
              response.end(
                `<h3 style="font-family: Lato,sans-serif; color:blue">Logged in successfully eje!</h3>`
              );
            } else {
              response.end(
                `<h3 style="font-family: Lato,sans-serif; color:red">incorrect credentials boss!</h3>`
              );
            }
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
