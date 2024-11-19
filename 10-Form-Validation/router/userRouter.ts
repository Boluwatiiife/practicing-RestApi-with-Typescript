import express from "express";
import bcrypt from "bcryptjs";
import { body, validationResult } from "express-validator";
import { error } from "console";

const userRouter: express.Router = express.Router();

// logic
userRouter.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family: Lato, san-serif;color:orange">Welcome to User Router my fans!!, we will do great things!</h3>`
    );
});

/*
fields required: name, email, password*/

userRouter.post(
  "/register",
  [
    body("name").not().isEmpty().withMessage("Name is Required!"),
    body("email").isEmail().withMessage("Email is Required!"),
    body("password")
      .isLength({ min: 5 })
      .withMessage("Minimum of 5 char Required for password"),
  ],
  async (
    request: express.Request,
    response: express.Response
  ): Promise<void> => {
    const errors = validationResult(request);
    if (!errors.isEmpty()) {
      response.status(404).json({ error: errors.array() });
      return;
    }
    let { name, email, password } = request.body;

    try {
      response.status(200).json({
        user: { name, email, password },
      });
    } catch (error) {
      console.error(error);
    }
  }
);

export default userRouter;
