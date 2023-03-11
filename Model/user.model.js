import mongoose from "mongoose";
const user=mongoose.Schema({
    email:{
        type:String,
        require:true,
        unique:true
    },
    password:{
        type:String,
        require:true
    }
});
export default user;
