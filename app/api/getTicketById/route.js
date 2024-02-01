import { Ticket } from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function POST(req){

    try {

        const id = await req.json()
       const res = await Ticket.findOne({_id:id})
        return NextResponse.json({
            res,
        },{
            status:200
        })
        
    } catch (error) {
        

        return NextResponse.json({
            message:"ERROR",
        error
        },{
            status:500
        }
        )

    }

}