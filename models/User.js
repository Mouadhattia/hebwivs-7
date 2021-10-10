const mongoose = require("mongoose");
const schema = mongoose.Schema;
const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new schema({
  name: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  team: {
    TOP: {type:schema.Types.Mixed,default:""},
    MID: {type:schema.Types.Mixed,default:""},
    JUNGLE: {type:schema.Types.Mixed,default:""},
    ADC: {type:schema.Types.Mixed,default:""},
    SUPPORT: {type:schema.Types.Mixed,default:""},
  },
});
module.exports = mongoose.model("user", UserSchema);
