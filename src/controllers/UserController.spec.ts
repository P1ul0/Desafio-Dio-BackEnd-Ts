import UserServices, { User } from "../services/UserService";
import UserController from "./UserController";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";
import { Request } from "express";

describe("UserController", () => {
  //o operador Partial<> serve para  remover os parametros desnecesário da classe intanciada
  const mockUserService: Partial<UserServices> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    delete: jest.fn()
  };
  //o operador as serve para atribuir o valor da classe instanciada ao mock desejado
  const userController = new UserController(mockUserService as UserServices);

  it("Deve adicionar um novo usuário", () => {
    const mockRequest = {
      body: {
        name: "Paulo",
        password: "123456",
      },
    } as Request;
    const MockResponse = makeMockResponse();
    userController.createUser(mockRequest, MockResponse);
    expect(MockResponse.state.status).toBe(201);
    expect(MockResponse.state.json).toMatchObject({
      message: "Usuário Cadastrado",
    });
  });

  it("Deve retornar um erro caso o usuário não mande o nome", () => {
    const mockRequest = {
      body: {
        name: "",
        password: "12345",
      },
    } as Request;
    const MockResponse = makeMockResponse();
    userController.createUser(mockRequest, MockResponse);
    expect(MockResponse.state.status).toBe(400);
    expect(MockResponse.state.json).toMatchObject({
      message: "Bad request! nome obrigátorio",
    });
  });

  it("Deve retornar todos os usuários cadastrado", () => {
    const users = undefined;
    const mockRequest = { }as Request;

    const mockResponse = makeMockResponse()
    userController.getAllUsers(mockRequest,mockResponse);
    expect(mockResponse.state.status).toBe(200)
    expect(mockResponse.state.json).toMatchObject({ users })
  });

  it('deve deletar o usuário desejado', () => {
    const mockRequest = {
      body: {
        name:'Paulo',
        password:'12345'
      }
    }as Request


    const mockResponse = makeMockResponse()
    userController.delete(mockRequest,mockResponse)
    expect(mockResponse.state.status).toBe(200);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuário deletado",
    });
  })
});
