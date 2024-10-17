import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  startDate: {
    type: String,
    required: true,
  },
  contextId: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Chat", chatSchema);
