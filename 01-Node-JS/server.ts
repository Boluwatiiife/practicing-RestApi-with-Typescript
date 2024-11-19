import http, { request, Server, IncomingMessage, ServerResponse } from "http";
import { StringUtil } from "./util/StringUtil";
import { MathUtil } from "./util/MathUtil";

const hostname: string = "127.0.0.1";
const port: number = 5000;

const server: Server = http.createServer(
  (request: IncomingMessage, response: ServerResponse) => {
    response.statusCode = 200;
    response.setHeader("Content-Type", "text/html");

    // string utli
    let customerName: string = "Boluwatife";
    let length: number = StringUtil.printLength(customerName);
    let channelName: string = "Boluwatife Tecnologies";
    let result: string = StringUtil.printTriangle(channelName);

    //Math Util
    let theNumber: number = 2;
    result = MathUtil.printMathTable(theNumber);

    response.end(
      `<pre style="font-family: Lato,sans-serif; color:blue">${result}</pre>`
    );
  }
);

server.listen(port, hostname, () => {
  console.log(`Node Js Server is up and running!!!`);
});
