import mongoose from "mongoose"

const DoctorSchema = mongoose.Schema(
    {
        email: { type: String, required: true, unique: true },
        password: { type: String, required: true }, 
        name: { type: String, required: true },
        specialty: { type: String },
        contact: { type: String },
        location: { type: String },
        availability: [
          {
            day: { type: String },
            slots: { type: String },
          },
        ],
        notifications: [
          {
            message: String,
            date: { type: Date, default: Date.now },
            read: { type: Boolean, default: false },
          },
        ],
        experience: { type: String}, 
        image: { type: String},
        isApproved: {
          type: Boolean,
          default: false,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const DrModel = mongoose.model("drlists", DoctorSchema)

export default DrModel;


