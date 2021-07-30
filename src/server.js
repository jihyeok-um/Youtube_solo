import express from "express";
import logger from "morgan";

const PORT = 4000
const app = express();
const loggerMiddleware = logger("dev")

const handleHome = (req, res) => {
    return res.end("I still love you");
}
const handleLogin = (req, res) => {
    return res.send("Login here.");
}

app.use(loggerMiddleware);
app.get("/", handleHome);
app.get("/login", handleLogin);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);
app.listen(PORT, handleListening);
