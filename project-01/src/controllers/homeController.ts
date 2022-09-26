import { Request, Response } from "express";

import User from "../models/User";

export const home = async (req: Request, res: Response) => {
  let user = await User.findOneAndUpdate(
    { "name.firstName": "Robson" },
    { "name.lastName": "Correia Fantin" }
  );

  // let andre = await User.findOne({ email: "andre@gmail.com" });
  // if (andre) {
  //   andre.name.lastName = "Tiozão Silva";
  //   await andre.save();
  // }
  // console.log(andre);

  // await User.updateMany({ age: { $lte: 18 } }, { age: 18 });

  let users = await User.find({}).sort({ "name.firstName": 1 });

  res.render("pages/home", {
    users,
  });
};
