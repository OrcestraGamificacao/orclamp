import mongoose from 'mongoose';

const CommentSchema = new mongoose.Schema({
  content: String,
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  sendDate: Date,
});

export default CommentSchema;
