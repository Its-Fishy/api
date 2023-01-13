import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";

import { getUserInfo } from "../functions/getUserInfo";

const limiter = rateLimit({
  // set windowMs to 1 minute
  windowMs: 1 * 60 * 1000,
  max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
  message: "You have exceeded the max requests, please try again later.", // Message to send when max requests are exceeded
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

export function rateLimiterMiddleware(req: Request, res: Response, next: NextFunction) {
  // check if berrer token is present
/*   if (req.headers.authorization) {
    const user = await getUserInfo(req, res);

    if (user.accountType === "admin" || user.accountType === "Admin") {
      next();
    }
    if (user.accountType === "bot" || user.accountType === "Bot") {
      next();
    }
    if (user.accountType === "user" || user.accountType === "User") {
      limiter(req, res, next);
    }
  } else { */
    limiter(req, res, next);
  }
// }