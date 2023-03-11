import jwt from 'jsonwebtoken';
import env from 'dotenv';
env.config();

const authSignUp=(req,res,next)=>{
  jwt.sign(req.body.email,process.env.KEY,(err,token)=>{
    if(err){
        err={
            name:'error during token creation',
            message:'jwt error'
        };
        res.status(401).send(err);
    }else{
        //passing token to res
        res.locals.token=token;
        next();
    }
  });
};
const authSignIn=(req,res,next)=>{
    jwt.verify(req.get('authtoken'),process.env.KEY,(err,data)=>{
        if(err){
            console.log(err);
            err={
                name:'user not signed In',
                message:'jwt error'
            };
            res.status(401).send(err);
        }else{
            next();
        }
    });
};
export {authSignUp,authSignIn};
