import dotenv from "dotenv";

dotenv.config();

export const PORT = process.env.PORT;

export const mongoUrl = `mongodb+srv://${process.env.DB_UserName}:${process.env.DB_Password}@explore.i2s1wtx.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`;
