import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User.model";
import bcrypt from "bcryptjs";
import { sendVerificationEmail } from "@/helpers/sendVerificationEmail";
import { errorMonitor } from "events";

export async function POST(request: Request) {
  await dbConnect();
  try {

   const {username,email,password} = await request.json()
   
  } catch (error) {
    console.error("error registering user", errorMonitor);
    return Response.json(
      {
        success: false,
        message: "errow while registering user",
      },
      {
        status: 500,
      },
    );
  }
}
