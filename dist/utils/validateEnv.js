"use strict";
// create a validateEnv function that returns true or false
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateEnv = void 0;
const validateEnv = () => {
    if (!process.env.NODE_ENV) {
        return { valid: false, message: "Missing Node Env" };
    }
    if (!process.env.API_PORT) {
        return { valid: false, message: "Missing API Port" };
    }
    if (!process.env.GOOGLE_CLOUD_PROJECT_ID) {
        return { valid: false, message: "Missing Google Cloud Project ID" };
    }
    if (!process.env.GOOGLE_CLOUD_ERROR_REPORTING_API_KEY) {
        return { valid: false, message: "Missing Google Cloud Error Reporting API Key" };
    }
    if (!process.env.MONGO_URI) {
        return { valid: false, message: "Missing Mongo URI" };
    }
    if (!process.env.JWT_SECRET) {
        return { valid: false, message: "Missing JWT Secret" };
    }
    if (!process.env.GOOGLE_SAFE_BROWSING_API_KEY) {
        return { valid: false, message: "Missing Google Safe Browsing API Key" };
    }
    if (!process.env.PHISHERMAN_API_KEY) {
        return { valid: false, message: "Missing Phisherman API Key" };
    }
    if (!process.env.URLSCAN_API_KEY) {
        return { valid: false, message: "Missing URLScan API Key" };
    }
    if (!process.env.VIRUS_TOTAL_API_KEY) {
        return { valid: false, message: "Missing Virus Total API Key" };
    }
    if (!process.env.IP_QUALITY_SCORE_API_KEY) {
        return { valid: false, message: "Missing ipQualityScore API Key" };
    }
    return { valid: true, message: "Environment variables validated!" };
};
exports.validateEnv = validateEnv;
//# sourceMappingURL=validateEnv.js.map