import mongoose, { Schema } from "mongoose";

const messageSchema = new mongoose.Schema({
  message: {
    type: String,
    required: true,
  },
  chatId: {
    type: Schema.Types.ObjectId,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  sender: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Message", messageSchema);
