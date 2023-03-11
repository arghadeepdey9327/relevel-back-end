import { event } from "../middleware/normal.middleware.js";
import {users} from "../server.js";
const signUpService=(req)=>{
    console.log('here it is-->',users);
  users.create({email:req.body.email,password:req.body.password}).then(data=>{
    event.emit('user created');
}).catch(e=> event.emit('user not created'));
};
const signInService=(req)=>{
    users.findOne({email:req.body.email,password:req.body.password})
    .then(data=>event.emit('successfull'))
    .catch(e=>event.emit('error during signIn'));
};

export {signInService,signUpService};
