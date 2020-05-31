const logUpload = require("../helper/content_helper").uploadFile;
const logDelete = require("../helper/content_helper").deleteFile;
const logRetrieve = require("../helper/content_helper").searchFile;
const config = require("../config/local");

module.exports.addLogFile = async (req, res) => {
  const { file } = req;
  if (!file) {
    return res
      .status(400)
      .send({ message: "No file was uploaded", data: null });
  }
  const result = await logUpload(file);
  if (result.data === null)
    return res.statu(400).send({ message: result.message });
  return res.status(200).send({ message: result.message, data: result.data });
};

module.exports.removeLogFile = async (req, res) => {
  const { fileName } = req.body;
  if (!fileName)
    return res.status(400).send({ message: "file name is required" });
  const params = {
    Bucket: config.BUCKET_FILE_PATH,
    Key: fileName,
  };
  const result = await logDelete(params);
  if (result.data === null)
    return res.statu(400).send({ message: result.message });
  return res.status(200).send({ message: result.message, data: result.data });
};

module.exports.findLogFile = async (req, res) => {
  const { fileName } = req.body;
  if (!fileName)
    return res.status(400).send({ message: "file name is required" });
  const params = {
    Bucket: config.BUCKET,
    Delimiter: "/",
  };
  const result = await logRetrieve(params);
  if (result.data === null)
    return res.statu(400).send({ message: result.message });
  return res.status(200).send({ message: result.message, data: result.data });
};
