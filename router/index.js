const express = require("express");
const multer = require("multer");
const indexRouter = express.Router();
const contrl = require("../controller/index");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads");
  },
  filename: function (req, file, cb) {
    cb(null, `${file.originalname} -${new Date(Date.now()).toISOString()}`);
  },
});

const upload = multer({ storage: storage });
indexRouter.get("/", (req, res) =>
  res.status(200).send({ message: "API is running fine" })
);
indexRouter.post("/log/upload", upload.single("log"), contrl.addLogFile);
indexRouter.post("/log/search", contrl.findLogFile);
indexRouter.put("/log/remove", contrl.removeLogFile);
module.exports = indexRouter;
