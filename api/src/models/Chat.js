import mongoose from 'mongoose';
import CommentSchema from './CommentSchema';

const ChatSchema = new mongoose.Schema({
  title: String,
  users: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  message: [CommentSchema],
  timestamp: true,
});

export default mongoose.model('Chat', ChatSchema);
