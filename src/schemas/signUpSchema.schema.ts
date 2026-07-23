import {z} from "zod" ;

export const usernameValidation = z.string().min(2,"username must be atleast 2 characters").max(20,"must be not longer than 20 words").regex(/^[a-zA-Z0-9]+$/,"Usrename must nto contain any specila characters")

export const singUpSchema = z.object({
    username : usernameValidation,
    email : z.string().email({message : "invalid email address"}),
    password : z.string().min(0,{message : "password must be atleast 6 characters"})
})