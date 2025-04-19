import mongoose from "mongoose";

const appointmentSchema = mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "drlists",
    required: true,
  },
  dateTime: {
    type: Date,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  status: {
    type: String,
    enum: ["active", "canceled"],
    default: "active"
  },
});

const AppointmentModel = mongoose.model("appointments", appointmentSchema);

export default AppointmentModel;
