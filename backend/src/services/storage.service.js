const ImageKit = require("@imagekit/nodejs").default;

const client = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

async function uploadFile({ buffer, fileName, folder = "" }) {
    const file = await client.files.upload({
        file: buffer.toString("base64"),
        fileName: fileName,
        folder: folder
    });

    return file;
}

module.exports = {
    uploadFile
};