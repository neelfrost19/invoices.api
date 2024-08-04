import express from "express";
import {
    getUser
} from "../controllers/user/userLoginController.js";

const router = express.Router();

router.route("/user-login").post(getUser);

export default router