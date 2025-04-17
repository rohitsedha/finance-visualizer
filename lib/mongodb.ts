import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) throw new Error('Missing MongoDB URI');

let cached = global.mongoose || { conn: null, promise: null };

export const connectDB = async () => {
  if (cached.conn) return cached.conn;
  
  cached.promise = cached.promise || 
    mongoose.connect(MONGODB_URI, { dbName: 'finance-tracker' });
  
  cached.conn = await cached.promise;
  return cached.conn;
};
