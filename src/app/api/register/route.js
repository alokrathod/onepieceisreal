import dbconnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Nakama from "@/Models/nakama";
import bcrypt from "bcryptjs";


export async function POST(request){
try {
    const { username, email, password } = await request.json();

    if (!username || !email || !password) {
        return NextResponse.json(
          { message: "Please provide all the required Details", success: false },
          { status: 400 }
        );
      }


      await dbconnect();

      const existinguser = await Nakama.findOne({username})
        if(existinguser){
            return NextResponse.json({
                message:'You are already one',
                success:false,
               
    
            })
        }

        const hashedPassword = await bcrypt.hash(password,10)
        const newUser = new Nakama({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUser.save();

    return NextResponse.json(
      {
        message: "You are now a Nakama",
        success: true,
        data: savedUser,
      },
      { status: 201 } 
    );
} catch (error) {
    console.error("Error in user registration:", error);

    return NextResponse.json(
      {
        message: "Error!!",
        success: false,
        error: error.message,
      },
      { status: 500 } 
    );
  }
}