import DownloadService from "../../services/download/downloadService.js";

class DownloadController {
    static async getDownload(req, res) {
        try {
            const download = await DownloadService.getDownload(req, res);
            res.download(
                download,
                (err) => {
                    if (err) {
                        res.status(500).send({
                            error : err,
                            msg   : "Problem downloading the file"
                        })
                    }
                });
        } catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
}

export default DownloadController;


