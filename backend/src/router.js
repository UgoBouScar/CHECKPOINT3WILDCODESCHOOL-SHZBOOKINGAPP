const express = require("express");
const multer = require("multer");

const router = express.Router();
const artistesControllers = require("./controllers/artistesControllers");
const stylesControllers = require("./controllers/stylesControllers");

const storage = multer.diskStorage({
  destination(req, file, cb) {
    cb(null, "public/assets/images");
  },
  filename(req, file, cb) {
    const fileArray = file.originalname.split(".");
    const extension = fileArray.pop();
    const fileName = fileArray.join("-").split(" ").join("-");
    cb(null, `${fileName}_${Date.now()}.${extension}`);
  },
});

const upload = multer({
  storage,
  limits: { fileSize: "2MB" },
});

router.get("/artistes", artistesControllers.browse);
router.get("/artistes/:id", artistesControllers.read);
router.put("/artistes/:id", upload.single("image"), artistesControllers.edit);
router.post("/artistes", upload.single("image"), artistesControllers.add);
router.delete("/artistes/:id", artistesControllers.destroy);

router.get("/styles", stylesControllers.browse);

module.exports = router;
