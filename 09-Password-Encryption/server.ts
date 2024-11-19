import express from "express";
import userRouter from "./router/userRouter";

const app: express.Application = express();

// configure express to receive form data
app.use(express.json());

const hostname: string = "127.0.0.1";
const port: number = 5000;

app.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family: Lato, san-serif;color:blue">Welcome to Express my fans!!, we will do great things!</h3>`
    );
});

// router configuration
app.use("/users", userRouter);

app.listen(port, hostname, () => {
  console.log(`Express server is started at http://${hostname}:${port}`);
});
