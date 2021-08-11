import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
    title: { type: String, required: true, trim: true, maxLength: 30},
    description: { type: String, required: true, trim: true, maxLength: 140},
    createdAt: { type: Date, required: true, default: Date.now },
    hashtags: [{ type: String, trim: true }],
    meta: {
        views:{type: Number, default: 0},
        rating:{type: Number, default: 0},
    },
});

videoSchema.pre("save", async function() {
    console.log(this);
    this.hashtags = this.hashtags[0].split(",").map((word) => (word.startsWith("#") ? word : `#${word}`));
}); 

const Video = mongoose.model("Video", videoSchema);
console.log(Video.hashtags);
export default Video;
