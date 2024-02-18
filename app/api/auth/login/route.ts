import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken"

connect()

export async function POST(request: NextRequest) {

    try {
        const reqBody = await request.json()
        const {email, password} = reqBody;

        // Check if user exists
        const user = await User.findOne({email})
        if(!user) {
            return NextResponse.json({error: "User does not exist"}, {status: 400})
        }

        // Check if password is correct
        const validPassword = await bcryptjs.compare
        (password, user.password)
        if(!validPassword) {
            return NextResponse.json({error: "Invalid password"}, {status: 400})
        }

        // Create token data
        const tokenData = {
            id: user._id,
            f_name: user.f_name,
            l_name: user.l_name,
            email: user.email,
        }
        // Create token
        const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn: "7d"})

        const response = NextResponse.json({
            message: "Login successful",
            success: true
        })

        response.cookies.set("token", token, {
            httpOnly: true, 
        })

        return response;

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, {
            status: 500
        })
    }
}