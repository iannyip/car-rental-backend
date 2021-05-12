import express from "express";
import cookieParser from "cookie-parser";
import methodOverride from "method-override";
import cors from 'cors';
import bindRoutes from "./routes.mjs"

// Initialize express instance
const app = express();
// Set the Express view engine to expect EJS template
app.set("view engine", "ejs");
// Bind cookie parser middleware to parse cookies in requests
app.use(cookieParser());
// Bind express middleware to parse request bodies of POST requests
app.use(express.urlencoded({extended: false}))
// Bind method override middleware to parse PUT and DELETE requests sent as POST requests
app.use(methodOverride('_method'));
// Expose the files stored in the public folder
app.use(express.static('public'))
// Add CORS middleware
app.use(cors());

// Bind route definitions to the Express application
bindRoutes(app)

// Set Express to listen on the given port
console.log("starting...");
const PORT = process.env.PORT || 3004;
app.listen(PORT);