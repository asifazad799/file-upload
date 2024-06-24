// scannerWorker.js
const { parentPort, workerData } = require('worker_threads');
const NodeClam = require('clamscan');
const fs = require('fs');
const path = require('path');

const scanFiles = async (files, config) => {
    const ClamScan = new NodeClam().init({...config});

    const clamscan = await ClamScan;
    const infectedFiles = [];

    for (const file of files) {

        const filePath = file.path;

        if (!fs.existsSync(filePath)) {
            console.log(`File ${filePath} does not exist.`);
            continue;
        }
        const fileStream = fs.createReadStream(filePath);
        const scanResult = await clamscan.scanStream(fileStream);
        
        // const scanResult = await clamscan.isInfected(filePath);

        if (scanResult.isInfected) {
            infectedFiles.push(file.originalname);
            fs.unlinkSync(filePath);
        } else {
            const targetPath = path.join('final_uploads', file.originalname);
            fs.renameSync(filePath, targetPath);
        }

    }

    return infectedFiles;
};

scanFiles(workerData.files, workerData.config)
    .then((infectedFiles) => {
        parentPort.postMessage({ success: true, infectedFiles });
})
    .catch((error) => {
        parentPort.postMessage({ success: false, error: error.message });
});
