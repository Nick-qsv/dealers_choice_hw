const express = require("express");
const router = express.Router();
const client = require('../db');
const main = require('../views/main');
const postDetails = require('../views/posts')
const app = require('../dealers_choice');

const baseQuery = "SELECT books.*, authors.name FROM books INNER JOIN authors ON authors.id = books.authorId";

router.get('/', async (req, res, next) =>{
    try{
        const data = await client.query(baseQuery);
        res.send(main(data.rows));
    }
    catch(ex){
        next(ex)
    }
})

router.get("/:id", async (req, res, next) => {
    try {
      const data = await client.query(baseQuery);
      const post = data.rows[req.params.id -1];
      res.send(postDetails(post));
    } catch (error) {
      next(error);
    }
  });

  module.exports = router;