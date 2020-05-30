const logUpload = require("../helper/content_helper").uploadFile;
const logDelete = require("../helper/content_helper").deleteFile;

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
