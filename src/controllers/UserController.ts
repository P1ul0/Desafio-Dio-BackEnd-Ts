import { Request, Response } from "express";
import UserServices from "../services/UserService";

export default class UserController {
  userService: UserServices;

  constructor(userService = new UserServices()) {
    this.userService = userService;
  }
  createUser = (req: Request, res: Response) => {

    const { name, password } = req.body;

    if (!name) {
      return res.status(400).json({ message: "Bad request! nome obrigátorio" });
    }
    if (!password) {
      return res.status(400).json({ message: "Senha obrigátoria" });
    }
    this.userService.createUser(name, password);
    return res.status(201).json({ message: "Usuário Cadastrado" });
  };

  getAllUsers = (req: Request, res: Response) => {
    const users = this.userService.getAllUsers();

    return res.status(200).json({ users });
  };


  delete = (req: Request, res: Response) => {
    const { name , password} = req.body
    const users = this.userService.delete(name,password)
    return res.status(200).json({message: "Usuário deletado"})
  }
}
