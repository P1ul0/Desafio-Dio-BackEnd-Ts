import  express, { Request, Response }   from'express'
import { router } from './routes'


const server = express()





server.use(express.json())
server.use(router)

server.get('/', (req: Request,res: Response) => {
    return res.status(200).json({ message: 'DioBank API'   })
})



server.listen(3000, () =>{
    console.log('servidor rodando na porta :', 3000);
    
})
