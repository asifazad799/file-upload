const { Worker } = require('worker_threads');
const async = require('async');
const path = require('path');

const { clamdscanConfig } = require('./configs');

const fileScannerQueue = async.queue((task, callback) => {
    const worker = new Worker(path.join(__dirname, 'scannerWorker.js'), {
        workerData: { files: task.files, config: clamdscanConfig },
    });

    worker.on('message', (message) => {
        if (message.success) {
            callback(null, { message: 'Files uploaded and scanned successfully.', infectedFiles: message.infectedFiles });
        } else {
            callback(new Error(message.error));
        }
    });

    worker.on('error', (error) => {
        callback(error);
    });

    worker.on('exit', (code) => {
        if (code !== 0) {
            callback(new Error(`Worker stopped with exit code ${code}`));
        }
    });
}, 5); // Adjust the concurrency level based on your server capacity

module.exports = {
    fileScannerQueue
}