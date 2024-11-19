import express from "express";

const userRouter: express.Router = express.Router();

// logic
userRouter.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family: Lato, san-serif;color:orange">Welcome to User Router my fans!!, we will do great things!</h3>`
    );
});

userRouter.get(
  "/test",
  (request: express.Request, response: express.Response) => {
    response.status(200).send(
      `<h3 style="font-family: Lato, san-serif;color:black">
      Welcome to User TEST!</h3>`
    );
  }
);

export default userRouter;
