import express from "express";
import bcrypt from "bcryptjs";

const userRouter: express.Router = express.Router();

// logic
userRouter.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family: Lato, san-serif;color:orange">Welcome to User Router my fans!!, we will do great things!</h3>`
    );
});

userRouter.post(
  "/register",
  async (request: express.Request, response: express.Response) => {
    let { name, email, password } = request.body;

    try {
      let salt = await bcrypt.genSalt(10);
      let hashedPassword = await bcrypt.hash(password, salt);

      response.status(200).json({
        user: { name, email, password },
        hashedPassword: hashedPassword,
      });
    } catch (error) {
      console.error(error);
    }
  }
);

export default userRouter;
