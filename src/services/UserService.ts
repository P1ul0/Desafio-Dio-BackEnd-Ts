export  interface User {
  name: string;
  password: string;
}

const db = [
  {
    name: "Paulo",
    password: "1234567",
  },
];

export default class UserServices {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }
  createUser = (name: string, password: string) => {
    const user = {
      name,
      password,
    };
    this.db.push(user);
    console.log("DB Atualizado", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };

  delete = (name:string , password: string) => {
   return(`Usuário com  nome ${name} foi deletado`);
    
  }
}
