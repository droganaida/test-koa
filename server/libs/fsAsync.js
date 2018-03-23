
const fs = require('fs');
const {promisify} = require('util');

const unlinkFileAsync = promisify(fs.unlink);

async function saveStream(streamIn, streamOut) {

    streamIn.on('end', function() {
        streamOut.end();
    });

    const end = new Promise(function(resolve, reject) {
        streamIn.on('end', () => resolve('ok'));
        streamIn.on('error', reject);
    });

    streamIn.pipe(streamOut);

    return await end;
}

async function unlinkFile(file) {
    await unlinkFileAsync(file);
}

module.exports.saveStream = saveStream;
module.exports.unlinkFile = unlinkFile;