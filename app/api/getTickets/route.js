import { Ticket } from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function GET(){
    try {
        
        const tickets = await Ticket.find()
        
        return NextResponse.json({tickets},{status:200})

    } catch (error) {
        return NextResponse.json({message:"Error"},{status:500})
    }
}