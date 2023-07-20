const express = require("express");

const router = express.Router();

const artistesControllers = require("./controllers/artistesControllers");

/* router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy); */

router.get("/artistes", artistesControllers.browse);
router.get("/artistes/:id", artistesControllers.read);

module.exports = router;
