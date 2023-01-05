import mongoose from "mongoose";

/**
 * A link type
 * @typedef {object} Link
 * @property {string} id.required - The ID
 * @property {string} link.required - The link
 * @property {string} type.required - The type
 * @property {string} reportedBy.required - The reportedBy
 * @property {string} reportedByID.required - The reportedByID
 * @property {string} dateReported.required - The dateReported
 *
 */
interface Link extends mongoose.Document {
  id: string;
  link: string;
  type: string;
  reportedBy: string;
  reportedByID: string;
  dateReported: Date;
}

const linkSchema = new mongoose.Schema({
  id: {
    type: String,
    required: [true, "Link ID is required"],
    unique: true,
  },
  link: {
    type: String,
    required: [true, "Link is required"],
    unique: true,
  },
  reportedBy: {
    type: String,
    required: [true, "Reported By is required"],
  },
  reportedByID: {
    type: String,
    required: [true, "Reported By ID is required"],
  },
  dateReported: {
    type: Date,
    default: Date.now,
    required: [true, "Date is required"],
  },
});

export { Link };
export const LinkModel = mongoose.model<Link>("Link", linkSchema);
