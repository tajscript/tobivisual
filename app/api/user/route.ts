import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextResponse } from "next/server";

connect()

export async function POST(request: Request) {
    try {
        const reqBody = await request.json()
        const { email, phone, address, city, state, country, zip } = reqBody
        console.log(reqBody)

        const updateInfo = User.findOneAndUpdate({email}, {
            phone: phone,
            address: address,
            city: city,
            state: state,
            country: country,
            zip: zip,
        })

        if (!updateInfo) {
            return NextResponse.json({ error: "User not found" }, {status: 400});
          }
        
        return NextResponse.json({
            message: "User created successfully",
            success: true,
            updateInfo
        })

    } catch (error: any) {
        return NextResponse.json({
            error: error.message
        }, {
            status: 500
        })
    }
}