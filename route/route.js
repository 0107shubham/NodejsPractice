import express from "express";
const route = express.Router();
import { Register } from "../controller/Register.js";

route.post("/register", Register);

export default route;
