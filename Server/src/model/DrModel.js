import mongoose from "mongoose"

const DoctorSchema = mongoose.Schema(
    {
        name: { type: String, required: true },
        specialty: { type: String, required: true },
        contact: { type: String, required: true },
        location: { type: String, required: true },
        availability: [
          {
            day: { type: String },
            slots: [{ type: String }],
          },
        ],        
        experience: { type: String}, 
        image: { type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const DrModel = mongoose.model("drlists", DoctorSchema)

export default DrModel;


