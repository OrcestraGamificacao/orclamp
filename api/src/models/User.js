import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  username_github: String,
  name: String,
  avatar_url: String,
  bio: String,
  techs: [String],
  password_hash: String,
  timestamp: true,
});

export default mongoose.model('User', UserSchema);
