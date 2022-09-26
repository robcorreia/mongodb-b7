import { Request, Response } from "express";
import User from "../models/User";

export const nome = (req: Request, res: Response) => {
  let nome: string = req.query.nome as string;
  let idade: string = req.query.idade as string;

  res.render("pages/nome", {
    nome,
    idade,
  });
};

export const idadeForm = (req: Request, res: Response) => {
  res.render("pages/idade");
};

export const idadeAction = (req: Request, res: Response) => {
  let mostrarIdade: boolean = false;
  let idade: number = 0;

  if (req.body.ano) {
    let anoNascimento: number = parseInt(req.body.ano as string);
    let anoAtual: number = new Date().getFullYear();
    idade = anoAtual - anoNascimento;
    mostrarIdade = true;
  }

  res.render("pages/idade", {
    idade,
    mostrarIdade,
  });
};

export const addUserAction = async (req: Request, res: Response) => {
  try {
    let newUser = await User.create({
      name: { firstName: req.body.firstName, lastName: req.body.lastName },
      email: req.body.email,
      age: parseInt(req.body.age),
      interests: req.body.interests.split(","),
    });

    res.redirect("/");

    console.log("usuário adicionado com sucesso!!");
  } catch (error) {
    console.log("usuário não adicionado!!");
  }
};

export const incrementAgeAction = async (req: Request, res: Response) => {
  let id: string = req.params.id;
  //console.log("Id: ", id);
  let usuario = await User.findOne({ _id: id });
  //console.log("Usuario com o id: ", usuario)
  if (usuario) {
    usuario.age++;
    await usuario.save();
  }
  res.redirect("/");
};
