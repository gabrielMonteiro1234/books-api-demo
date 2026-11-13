import { Server, Request, Response, Next } from "restify";
import { NotFoundError } from "restify-errors";

import { BookRepo } from "../repo/book-repo";
import { NewBook } from "../models/book";

export function bookRoutes(s: Server, r: BookRepo) {

    // GET all books
    s.get("/api/books", (req: Request, res: Response, next: Next) => {
        res.send(r.list());
        return next();
    });

    // GET a book by ID
    s.get("/api/books/:id", (req: Request, res: Response, next: Next) => {
        const b = r.get(Number(req.params.id));

        if (!b) {
            return next(new NotFoundError());
        }

        res.send(b);
        return next();
    });

    // POST a new book
    s.post("/api/books", (req: Request, res: Response, next: Next) => {
        const data = req.body as NewBook;

        res.send(201, r.create(data));
        return next();
    });

    // PUT - replace an existing book
    s.put("/api/books/:id", (req: Request, res: Response, next: Next) => {
        const data = req.body as NewBook;
        const b = r.update(Number(req.params.id), data);

        if (!b) {
            return next(new NotFoundError());
        }

        res.send(b);
        return next();
    });

    // PATCH - partially update a book
    s.patch("/api/books/:id", (req: Request, res: Response, next: Next) => {
        const data = req.body as Partial<NewBook>;
        const b = r.patch(Number(req.params.id), data);

        if (!b) {
            return next(new NotFoundError());
        }

        res.send(b);
        return next();
    });

    // DELETE a book
    s.del("/api/books/:id", (req: Request, res: Response, next: Next) => {
        const deleted = r.delete(Number(req.params.id));

        if (!deleted) {
            return next(new NotFoundError());
        }

        res.send(204);
        return next();
    });
}