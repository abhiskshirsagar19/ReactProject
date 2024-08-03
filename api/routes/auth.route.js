import express from "express";
import { signup, signIn } from "../controller/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signIn);
export default router;
