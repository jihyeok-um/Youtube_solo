import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/Youtube_solo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const handleOpen = () => console.log("Connected to DB");
const db = mongoose.connection;
db.on("error", (error) => console.log("DB Error", error));
db.once("open", handleOpen);