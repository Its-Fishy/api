import * as express from "express";

import domainRoutes from "./domain";
import linkRoutes from "./link";
import userRoutes from "./user";

const router = express.Router();

/**
 * GET /
 * @summary The Root endpoint, simply returns "Hello World!"
 * @tags Main API Endpoints
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("/", (req, res) => {
  res.send("Hello World!");
});

/**
 * GET /tos
 * @summary This serves the terms of service page
 * @tags Misc Endpoints
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("/tos", (req, res) => {
  // send the file, located in src/public/html/tos.html
  res.sendFile("tos.html", { root: "./src/public/html" });
});

/**
 * GET /privacy
 * @summary This serves the privacy policy page
 * @tags Misc Endpoints
 * @return {object} 200 - success response - application/json
 * @return {object} 400 - Bad request response
 */
router.get("/privacy", (req, res) => {
  // send the file, located in src/public/html/privacy.html, with the css styling applied
  res.sendFile("privacy.html", { root: "./src/public/html" });
});

router.use("/user", userRoutes);
router.use("/link", linkRoutes);
router.use("/domain", domainRoutes);

export default router;
