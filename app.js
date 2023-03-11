import { Router } from 'express';
import {authSignUp,authSignIn} from './middleware/auth.middleware.js';
import {signInHandler,signUpHandler} from './middleware/normal.middleware.js'
const app =Router();

app.post('/signup',authSignUp,signUpHandler);
app.post('/signin',authSignIn,signInHandler);

export default app;
