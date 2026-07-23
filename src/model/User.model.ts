import mongoose from "mongoose";
import mongosoe, { Schema, Document } from "mongoose";

export interface Message extends Document {
  content: string;
  createdAt: Date;
}

const MessageSchema: Schema<Message> = new Schema({
  content: {
    type: String,
    required: true,
  },

  createdAt: {
    type: Date,
    required: true,
    default: Date.now,
  },
});

export interface User extends Document {
  username: string;
  email: string;
  password: string;
  verifyCode: string;
  verifyCodeExpiry: Date;
  isVerified : boolean;
  isAcceptingMessages: boolean;
  messages: Message[];
}

const UserSchema: Schema<User> = new Schema({
  username: {
    type: String,
    required: [true, "email is required"],
    trim: true,
    unique: true,
    match : [/.+\@.+\..+/,"please give valid email"]
  },
  
  password: {
    type: String,
    required: [true, "password is required"],
  },
  verifyCode:{
    type : String ,
    required : true ,

  },
  verifyCodeExpiry:{
    type : Date ,
    required : true ,
    
  }
  ,
  isVerified :{
    type : Boolean ,
    default : false ,
  },
  isAcceptingMessages : {
    type : Boolean ,
    default : true ,
  },
  messages : [MessageSchema] 
});


const UserModel = (mongosoe.models.User as mongoose.Model<User>) || (mongoose.model<User>("User",UserSchema))

export default  UserModel ;