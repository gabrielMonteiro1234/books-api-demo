import express, { Request, Response } from "express";

import { Book, NewBook } from "../models/book";
import { BookRepo } from "../repo/book-repo";

const books = express.Router();
const repo = new BookRepo();

type Params = { id: string };

// GET all books
books.get("/", (req: Request, res: Response<Book[]>) => {
    res.json(repo.list());
});

// GET a book by ID
books.get("/:id", (req: Request<Params>, res: Response<Book>) => {
    const b = repo.get(Number(req.params.id));

    if (!b) {
        res.sendStatus(404);
        return;
    }

    res.json(b);
});

// POST a new book
books.post("/", (req: Request<{}, Book, NewBook>, res: Response<Book>) => {
    res.status(201).json(repo.create(req.body));
});

// PUT - replace an existing book
books.put("/:id", (req: Request<Params, Book, NewBook>, res: Response<Book>) => {
    const b = repo.update(Number(req.params.id), req.body);

    if (!b) {
        res.sendStatus(404);
        return;
    }

    res.json(b);
});

// PATCH - partially update a book
books.patch("/:id", (req: Request<Params, Book, Partial<NewBook>>, res: Response<Book>) => {
    const b = repo.patch(Number(req.params.id), req.body);

    if (!b) {
        res.sendStatus(404);
        return;
    }

    res.json(b);
});

// DELETE a book
books.delete("/:id", (req: Request<Params>, res: Response) => {
    const deleted = repo.delete(Number(req.params.id));

    if (!deleted) {
        res.sendStatus(404);
        return;
    }

    res.sendStatus(204);
});

export default books;