import mongoose from "mongoose"

const DataSchema = mongoose.Schema(
    {
        name: { type: String},
        designation: { type: String},
        image: { type: String},
        short: { type: String},
    },
    {
        timestamps: true,
        versionKey: false,
    }
)

const TeamModel = mongoose.model("teams", DataSchema)

export default TeamModel;