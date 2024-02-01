import { Ticket } from "@/app/(models)/Ticket";
import { NextResponse } from "next/server";

export async function PUT(req){

    try {

        const data = await req.json()
        
        await Ticket.findByIdAndUpdate(data.id,{...data.formData})
        return NextResponse.json({
            message:"edited successfully"
        },{
            status:200
        })
        
    } catch (error) {
        return NextResponse.json({
            message:"failed to update",
            error
        },{
            status:500
        })
    }


}