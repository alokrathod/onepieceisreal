import mongoose,{Schema} from "mongoose";

const nakamaSchema = new Schema({
    username: {
    type: String,
    required: [true, 'Username is required'],
    unique: true,

  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
    lowercase: true,
    trim: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters long']
  }
})

const Nakama = mongoose.models.Nakama || mongoose.model('Nakama', nakamaSchema);

export default Nakama;