import { Ticket } from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){
    const id = await req.json()

    try {
        
        await Ticket.findByIdAndDelete(id)
        return NextResponse.json({
            message:"successfully deleted",
        
        },{
            status:200
        })

    } catch (error) {
        return NextResponse.json({
            message:"Error",
            error
        },{
            status:500
        })
    }


}