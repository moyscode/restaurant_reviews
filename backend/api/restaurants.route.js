import express from "express";

const router = express.Router();

router.route("/").get((res, req) => res.send("hello world"));

export default router;
