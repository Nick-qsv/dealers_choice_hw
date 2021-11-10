const html = require("html-template-tag");

module.exports = (posts) => html` <!DOCTYPE html>
    <html>
    <link rel="stylesheet" href="/styles.css" />
        <body>
         <div>
          <a href='/api' class="backlink">Back to Book List</a>
          <p>
           <span class="book-title">${posts.title}</span><small class="book-details"> (by ${posts.name})</small>
          </p>
           <small>
            <span class="book-content-details">${posts.content}</span>
           </small>
         </div>
        </body>
    </html>
`;