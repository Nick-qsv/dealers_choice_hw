const html = require("html-template-tag");

module.exports = (books) => html` <!DOCTYPE html>
  <html>
    <head>
      <title>Nick's Favorite Books</title>
      <link rel="stylesheet" href="/styles.css" />
    </head>
    <body>
      <div class="book-list">
        <h1>Nick's Favorite Books</h1>

        ${books.map(
          (book) => html` <div class="news-item">
            <p>
              <span class="news-position">${book.id}. ▲</span>
              <a href="/api/${book.id}">${book.title}</a>
              <small>(by ${book.name})</small>
            </p>
          </div>`
        )}
      </div>
    </body>
  </html>`;


