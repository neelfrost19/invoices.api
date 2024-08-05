import path from 'path';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import {Logger} from "./logger.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const __srcDir=dirname(__dirname);
const __parentDir = dirname(__srcDir);

export class DownloadDoc {
    static downloadDoc(documentName, pathId) {
        try {
            return path.join(__parentDir, 'download', pathId, documentName);
        }
        catch(err) {
            Logger.error('path creation failed ' +err.message);
        }
    }
}
