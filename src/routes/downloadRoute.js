import express from "express";
import DownloadController from "../controllers/download/downloadController.js";

const router = express.Router();

router.route("/download/:pathId/:fileName").get(DownloadController.getDownload);

export default router