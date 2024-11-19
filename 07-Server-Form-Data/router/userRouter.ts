import express from "express";

const userRouter: express.Router = express.Router();

// logic
/*
@usage: test usage
@url: http://127.0.0.1:5000/users/
@method: get
@fields: no fields
@access: public
*/
userRouter.get("/", (request: express.Request, response: express.Response) => {
  response
    .status(200)
    .send(
      `<h3 style="font-family: Lato, san-serif;color:green">Welcome to User Router, we will do great things!</h3>`
    );
});

// form data
/*
@usage: to check the form data
@url: http://127.0.0.1:5000/users/login
@method: post
@fields: name, password
@access: public
*/
userRouter.post(
  "/login",
  (request: express.Request, response: express.Response) => {
    let formData = request.body; // to receive the form data from client.
    response.status(200).json({
      message: "Form data is received",
      formData: formData,
    });
  }
);

export default userRouter;
