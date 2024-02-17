import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendEmail } from "@/helpers/mailer";

connect()

export async function POST(request: Request) {
    try {
        const reqBody = await request.json()
        const {f_name, l_name, email, password} = reqBody
        console.log("Request Body: ", reqBody)

        // check if user already exists
        const user = await User.findOne({email})

        if(user) {
            return NextResponse.json({
                error: "User already exists"
            }, {
                status: 400
            })
        }

        // Hash password
        const salt = await bcryptjs.genSalt(10)
        const hashedPassword = await bcryptjs.hash
        (password, salt)

        const newUser = new User({
            f_name,
            l_name,
            email,
            password: hashedPassword,
        })

        const savedUser = await newUser.save()
        console.log("Saved User:", savedUser)

        // Send Verification Email
        await sendEmail({email, emailType: "VERIFY", userId: savedUser._id})

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        })

    } catch (error: any) {
        return NextResponse.json({
            error: console.log(error.message),
        }, {
            status: 500
        })
    }
}