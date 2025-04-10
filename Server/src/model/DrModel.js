import mongoose from "mongoose"

const DataSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        specialty: { type: String, required: true },
        contact: { type: String, required: true },
        location: { type: String, required: true },
        availability: { 
            type: String, 
            required: true 
        },
        experience: { type: String}, 
        image: { type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const DrModel = mongoose.model("drlists", DataSchema)

export default DrModel;


