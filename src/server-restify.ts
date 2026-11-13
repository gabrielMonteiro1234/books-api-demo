import * as restify from "restify";

import { BookRepo } from "./repo/book-repo";
import { bookRoutes } from "./routes/restify-books";

const server = restify.createServer();

const repo = new BookRepo();

server.use(restify.plugins.bodyParser());

bookRoutes(server, repo);

server.listen(8080, () => {
    console.log("Restify server running on port 8080");
});
