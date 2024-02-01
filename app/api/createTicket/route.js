import { Ticket } from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";



export async function POST(req){

    try {
        
        const body = await req.json()
        
      
    
        await Ticket.create(body)
        return NextResponse.json({
            message:"Ticket created"
        },{
            status:201
        })
    } catch (error) {
        return NextResponse.json({
            message:"Error",
            error
        },
        {
            status:500
        }
        )
    }

}