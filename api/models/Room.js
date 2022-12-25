import mongoose from "mongoose";
const { Schema } = mongoose;
const RoomSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
     
    },
    price: {
      type: Number,
      require: true,
      
    },
    desc: {
      type: String,
      require: true,
    },
    MaxPeople: {
      type: Number,
      require: true,
    },
     roomNumber:[{number:Number,unavailableDates:{type:[Date]}}],
  },
  { timestamps: true }
);
export default mongoose.model("Room", RoomSchema);
