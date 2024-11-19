import express from "express";

const apiRouter: express.Router = express.Router();

// logic
apiRouter.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family: Lato, san-serif;color:green">Welcome to Api Router my fans!!, we will do great things!</h3>`
    );
});

apiRouter.get(
  "/test",
  (request: express.Request, response: express.Response) => {
    response.status(200).send(
      `<h3 style="font-family: Lato, san-serif;color:green">
      Welcome to Api TEST!</h3>`
    );
  }
);

export default apiRouter;
