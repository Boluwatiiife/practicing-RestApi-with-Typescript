import http from "http";
export class ApiRouter {
  public static mapRoutes(
    request: http.IncomingMessage,
    response: http.ServerResponse
  ) {
    // node js routing
    let url: string | undefined = request.url;
    let method: string | undefined = request.method;
    let result: string = "";

    if (url === "/" && method === "GET") {
      result = `<h3 style="font-family: Lato,sans-serif; color:blue"> Welcome to Bolu's start up!</h3>`;
    } else if (url === "/about" && method === "GET") {
      result = `<h3 style="font-family: Lato,sans-serif; color:blue">here's our About page</h3>`;
    } else if (url === "/contact" && method === "GET") {
      result = `<h3 style="font-family: Lato,sans-serif; color:blue">contact pageee</h3>`;
    } else {
      result = `<h3 style="font-family: Lato,sans-serif; color:red">Error eje: pageee not found!!</h3>`;
    }

    response.end(`${result}`);
  }
}
