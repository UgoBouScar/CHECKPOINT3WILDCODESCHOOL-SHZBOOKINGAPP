const express = require("express");

const router = express.Router();
const artistesControllers = require("./controllers/artistesControllers");

router.get("/artistes", artistesControllers.browse);
router.get("/artistes/:id", artistesControllers.read);
router.put("/artistes/:id", artistesControllers.edit);
router.post("/artistes", artistesControllers.add);
router.delete("/artistes/:id", artistesControllers.destroy);

module.exports = router;
