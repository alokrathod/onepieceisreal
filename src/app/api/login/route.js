import dbconnect from "@/lib/mongodb";
import { NextResponse } from "next/server";
import Nakama from "@/Models/nakama";

// route: /api/login
export async function POST(request) {
  try {
    const { email, password } = await request.json();

    if (!email || !password) {
      return NextResponse.json(
        {
          message: "Please provide all the required details",
          success: false,
        },
        { status: 400 }
      );
    }

    await dbconnect();

    const existinguser = await Nakama.findOne({ email });
    if (!existinguser) {
      return NextResponse.json({
        message: "User not found. Please register first",
        success: false,
      });
    }

    return NextResponse.json(
      {
        message: `Welcome back ${existinguser.username}`,
        success: true,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error in user login:", error);

    return NextResponse.json(
      {
        message: "Error!",
        success: false,
        error: error.message,
      },
      { status: 500 }
    );
  }
}
