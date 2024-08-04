import express from "express";
import {
    createUser,
    getUser
} from "../controllers/user/userController.js";

const router = express.Router();

router.route("/user").get(getUser).post(createUser);
//router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);

export default router