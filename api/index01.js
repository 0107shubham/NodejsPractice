import express from "express";
import route from "../route/route.js";
const app = express();
app.use(express.json());
app.use("/api", route);
app.get("/", (req, res) => {
  res.send("hiii janeman");
});
app.listen(8080);
