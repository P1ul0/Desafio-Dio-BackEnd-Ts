import UserController from "../controllers/UserController";
import UserServices, { User } from "./UserService";

describe("UserService", () => {
  const mockDb: User[] = [];
  const UserService = new UserServices(mockDb);
  const mockConsole = jest.spyOn(global.console, "log");
  const mockReturn = jest.fn()
 

  it("Deve adicionar um usuário ", () => {
    UserService.createUser("Paulo", "123456");
    expect(mockConsole).toHaveBeenCalledWith("DB Atualizado", mockDb);
  });

  it("Deve deletar um usuário", () => {
    UserService.delete("Paulo", "123454");
    expect(mockReturn).toBe();
  });
});
