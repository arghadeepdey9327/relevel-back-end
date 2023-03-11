import express, { json } from 'express';
import env from 'dotenv';
import cors from 'cors';
import app from './app.js';
import mongoose from 'mongoose';
import user from './Model/user.model.js';
const server=express();
env.config();
server.use(cors());
server.use(json());

server.use(app);
let users='';

const conn1=mongoose.createConnection(process.env.URI)

.once('connected',()=>{
    users=conn1.model('users',user);
    console.log('user db connected');
    server.listen(process.env.PORT,()=>console.log('server running'));
});

export {users};



