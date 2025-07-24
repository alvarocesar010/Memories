const express = require("express");

const router = express.Router();

const upload = require("./config/upload");

const {
  createMemory,
  getMemories,
  getMemory,
  deleteMemory,
  updateMemory,
  toggleFavorite,
  addComment,
} = require("./controllers/MemoryController");

router.post(
  "/",
  upload.single("image"),
  (req, res, next) => {
    const image = req.file;

    if (!image) {
      return res.status(400).json({ msg: "Please, send a file!" });
    }

    next();
  },
  (req, res) => createMemory(req, res)
);

router.get("/", getMemories);

router.get("/:id", (req, res) => getMemory(req, res));

router.delete("/:id", (req, res) => deleteMemory(req, res));

router.patch("/:id", upload.single("image"), (req, res) =>
  updateMemory(req, res)
);

router.patch("/favorite/:id", toggleFavorite);

router.patch("/:id/comment", addComment);

module.exports = router;
