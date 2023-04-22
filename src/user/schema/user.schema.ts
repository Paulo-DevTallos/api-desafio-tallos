import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  name: {
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
  company: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'companies',
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
});
