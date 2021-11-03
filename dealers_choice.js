const express = require('express');
const bookBank = require("./bookBank");
const morgan = require("morgan");
const app = express();

app.use(morgan("dev"));

app.use(express.static("support"));

app.get('/', (req, res) =>{
    const books = bookBank.list();
    const html = `
    <!DOCTYPE html>
    <html>
     <head>
        <title>Nick's Favorite Books</title>
        <link rel="stylesheet" href="/styles.css" />
     </head>
      <body>
        <div class="book-list">
        <h1>Nick's Favorite Books</h1>
            ${books
            .map(
                (book) =>`
                    <div class='book-item'>
                        <p>
                            <span class="book-position">${book.id}.♦</span>
                            <a href="/books/${book.id}">${book.title}</a><small> (by ${book.author})</small>
                        </p>
                        <small> Rating: ${book.rating}</small>
                    </div>`
            )
        .join("")}
        </div>
     </body>
    </html>
    `
    res.send(html);
});

app.get("/books/:id", (req, res) => {
    const id = req.params.id;
    const book = bookBank.find(id);
    //if (!post.id){}
    const html = `<!DOCTYPE html>
    <html>
    <link rel="stylesheet" href="/styles.css" />
        <body>
         <div>
          <a href='/' class="backlink">Back to Book List</a>
          <div class="book-image">${book.image}</div>
          <p>
           <span class="book-title">${book.title}</span><small class="book-details"> (by ${book.author})</small>
          </p>
           <small>
            <span class="book-content-details">${book.content}</span>
           </small>
           <p class="book-details">
            Rating: ${book.rating}
           </p>
         </div>
        </body>
    </html>
    `
    res.send(html);
})

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`listening on PORT ${PORT}`));