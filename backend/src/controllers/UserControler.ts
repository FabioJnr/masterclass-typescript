import { Request, Response} from 'express';
import EmailService from '../services/EmailService';


const users = [

    { name: "Fabio", email: "fabio@silva.com.br"}
]


export default {

    async index(req: Request, res: Response){
        return res.json(users);
    },

    async create( req: Request, res: Response){

        const emailService = new EmailService();
        emailService.sendMail({
            to: { 
                name: 'Fabio',
                email:'fabio.silva@gmail.com'
            }, 
            message: {
                    body: '',
                    subject: 'Teste' 
                }


            }
            
        ); 
        
    }

};