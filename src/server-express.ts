import express from "express";
import books from "./routes/express-books";

const app = express();

app.use(express.json());

app.use("/api/books", books);

app.listen(3000, () => {
    console.log("Express server running on port 3000");
});