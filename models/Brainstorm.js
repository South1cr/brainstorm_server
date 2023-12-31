const { model, Schema } = require("mongoose");

const BrainstormSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String
    },
    user: { type: Schema.Types.ObjectId, ref: "User" },
  },
  {
    timestamps: true,
    timeseries: true,
  }
);

module.exports = model("Brainstorm", BrainstormSchema);