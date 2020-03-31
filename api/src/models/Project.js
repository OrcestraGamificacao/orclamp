import mongoose from 'mongoose';
import CommentSchema from './CommentSchema';

const ProjectSchema = new mongoose.Schema({
  title: String,
  description: String,
  onwer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  followers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  ],
  image: String,
  tags: [String],
  comments: [CommentSchema],
  timestamp: true,
});

export default mongoose.model('Project', ProjectSchema);
