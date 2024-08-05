import {DownloadDoc} from "../../libs/downloadDoc.js";

class DownloadService {
    static async getDownload(req, res) {
        const {pathId, fileName} = req.params;
        return DownloadDoc.downloadDoc(fileName, pathId);
    }
}

export default DownloadService;
