
import mongoose , {Schema} from "mongoose";
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_DB_URL)

const ticketSchema = new Schema({
    title:{type:String},
    description:{type:String},
    category:{type:String},
    priority:{type:String},
    progress:{type:String},
    status:{type:String},
    active:{type:Boolean}
},{
    timestamps:true
}

)


export const Ticket = mongoose.models.tickets||mongoose.model("tickets",ticketSchema)