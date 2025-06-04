import mongoose from "mongoose";

const storySchema = new mongoose.Schema({
  story: {
    type: String,
    required: true,
  },
  name: String,
  twitter: String,
  insta: String,
}, {
  timestamps: true
});

const Story = mongoose.models.Story || mongoose.model("Story", storySchema);

export default Story;
