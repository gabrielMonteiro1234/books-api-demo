import { Book, NewBook } from "../models/book";

export class BookRepo {

    private books: Book[] = [];
    private nextId = 1;

    // Get all books
    list(): Book[] {
        return this.books;
    }

    // Get one book
    get(id: number): Book | undefined {
        return this.books.find(book => book.id === id);
    }

    // Create a book
    create(data: NewBook): Book {
        const book: Book = {
            id: this.nextId++,
            ...data
        };

        this.books.push(book);

        return book;
    }

    // Replace an existing book
    update(id: number, data: NewBook): Book | undefined {
        const index = this.books.findIndex(book => book.id === id);

        if (index === -1) {
            return undefined;
        }

        const updatedBook: Book = {
            id,
            ...data
        };

        this.books[index] = updatedBook;

        return updatedBook;
    }

    // Partially update a book
    patch(id: number, data: Partial<NewBook>): Book | undefined {
        const book = this.get(id);

        if (!book) {
            return undefined;
        }

        Object.assign(book, data);

        return book;
    }

    // Delete a book
    delete(id: number): boolean {
        const index = this.books.findIndex(book => book.id === id);

        if (index === -1) {
            return false;
        }

        this.books.splice(index, 1);

        return true;
    }
}