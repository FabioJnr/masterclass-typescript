interface IMailTo{

    name: String;
    email:String;

}

interface IMailNessage{

    subject: String
    body: String;
    attachment ?: String[];

}

interface IMessageDTO{
    to: IMailTo,
    message: IMailNessage
}

interface IEmailService{
    sendMail(request: IMessageDTO): void;
}
 
 class EmailService implements IEmailService {

    sendMail({to, message}: IMessageDTO){
        console.log(`email enviado para ${to.name}: ${message.subject}`);
    }

 }

 export default EmailService;