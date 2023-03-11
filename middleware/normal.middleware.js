import { EventEmitter } from 'node:events';
import { signInService,signUpService } from '../service/service.js';
const event=new EventEmitter();
const signUpHandler=(req,res)=>{
    signUpService(req);
    event.once('user not created',()=>{
        res.status(404).send('user not created');
    });
    event.once('user created',()=>{
     res.send(res.locals.token);
    });
};
const signInHandler=(req,res)=>{
    signInService(req);
    event.once('error during signIn',()=>res.send('error'));
    event.once('successfull',()=>res.send('done'));
};
export {signInHandler,signUpHandler,event};
