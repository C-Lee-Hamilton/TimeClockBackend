import mongoose from "mongoose";
import passportLocalMongoose from "passport-local-mongoose";

const Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: { type: String, unique: true, required: true },
  username: { type: String, unique: true, required: true },
  time: { type: Array, required: false },
});

UserSchema.plugin(passportLocalMongoose);

export default mongoose.models.User || mongoose.model("TimeUser", UserSchema);
