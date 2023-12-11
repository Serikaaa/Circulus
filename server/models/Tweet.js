import mongoose from "mongoose";

const TweetSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required:true
    },
    likes: {
      type: Array,
      defaultValue: []
    },
    picture: {
      type: String
    },
    typefile: {
      type: String
    },  
  },
  { timestamps: true }
);

export default mongoose.model("Tweet", TweetSchema);
