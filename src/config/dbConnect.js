import mongoose from "mongoose";

const uri = `mongodb+srv://matheusChaves:${process.env.SENHA}@api-mongodb-alura.zowt6.mongodb.net/api-mongodb-alura`;

mongoose.connect(uri);

let db = mongoose.connection;

export default db;
