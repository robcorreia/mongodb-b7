import { Request, Response } from "express";

import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  let paulo = await User.findOne({ email: "paulo@gmail.com" });
  await paulo?.remove();
  // await User.findOneAndDelete({ email: "jorge@gmail.com" });

  let users = await User.find({}).sort({ "name.firstName": 1 });

  res.render("pages/home", {
    users,
  });
};
