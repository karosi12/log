const fs = require("fs");
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);
const unlinkAsync = promisify(fs.unlink);
const AWS = require("aws-sdk");
const config = require("../config/local");
const spaceEndpoint = new AWS.Endpoint(config.SPACE_ENDPOINT);
const s3 = new AWS.S3({
  endpoint: spaceEndpoint,
  accessKeyId: config.ACCESS_KEYID,
  secretAccessKey: config.SECRET_ACCESS_KEY,
});

module.exports.uploadFile = async (file) => {
  if (file.filename) {
    const content = await readFileAsync(`./uploads/${file.filename}`);
    if (!content) {
      return { message: "unable to upload file", data: null };
    } else {
      const fileContent = await content;
      const params = {
        Bucket: config.BUCKET_FILE_PATH,
        Key: file.filename, // file name you want to save as
        Body: fileContent,
        ACL: "public-read",
        ContentEncoding: "base64",
        ContentDisposition: "inline",
      };
      const response = await s3.upload(params).promise();
      await unlinkAsync(`./uploads/${file.filename}`);
      if (!response) {
        return {
          message: `unable to save file ${file.filename}`,
          data: null,
        };
      }
      return {
        message: `${file.filename} was uploaded successfully`,
        data: `${response.Location}`,
      };
    }
  } else {
    return { message: "No file found, try upload again", data: null };
  }
};

module.exports.deleteFile = async (params) => {
  s3.deleteObject(params, async (err, data) => {
    if (err) {
      return { message: "unable to delete image", data: null };
    }
  }).promise();
  return {
    message: `${params.Key} document deleted successfully`,
    data: params.Key,
  };
};

module.exports.searchFile = async (params) => {
  const data = await s3.listObjects(params).promise();
  if (!data || data.Contents.length === 0)
    return { message: "No document", data: null };
  return { message: "file retrieved", data: data.Contents };
};