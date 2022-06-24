const express = require('express');
const app = express();
const knex = require('knex')(require('../knexfile.js')['development'])
const cors = require('cors'); //needed this because cors was blocking the post request from chrome
app.use(cors());

app.use(express.json())

// const movies = [
//   {title: 'Mean Girls'},
//   {title: 'Hackers'},
//   {title: 'The Grey'},
//   {title: 'Sunshine'},
//   {title: 'Ex Machina'},
// ];

app.get("/", (req, res) => {
  console.log(`working on get for /...`)
  knex('movies')
    .select('*')
    .where('id', '>', 5)
    .then(movies => {
      // console.log(`sending data: `, movies)
      res.status(200).send(movies);
    })
})

app.post("/", (req, res) => {
  console.log(`working on post for /...`)
  let body = req.body;
  if(body.title === undefined) {
    res.status(404).send('title key not found')
    console.log('post failed, title key not found')
  } else if(body.title.length < 1) {
    res.status(404).send('title must be at least 1 character')
    console.log('post failed, title less than 1 character')
  } else {
    knex('movies')
      .insert(req.body)
      .returning('id')
      .then( ids => {
        knex('movies')
          .select('*')
          .where('id', '=', ids[0].id)
          .then(data => {
            res.status(200).json(data);
          })
      })
  }
})

//patches only the watched property
app.patch("/:id", (req, res) => {
  let { id } = req.params;
  console.log(`working on patch for /${id}...`)

  let body = req.body

  if(req.body.watched === true || req.body.watched === false) {
    knex('movies')
    .where('id', '=', id)
    .update(req.body, ["watched"])
    .then(() => {
      res.status(200).send()
    })
  } else {
    res.status(404).send()
  }

})

app.delete("/:id", (req, res) => {
  let { id } = req.params;
  console.log(`working on delete for /${id}...`)
  knex('movies')
  .where('id', '=', id)
  .del()
  .then(data => {
    if(data > 0) {
      res.status(200).send(`Number of records deleted: ${data}`)
    } else {
      res.status(404).send();
    }
  })
})


app.all('*', (req, res) => {
  console.log(`Your ${req.method } request to ${req.path} has been formally rejected. Valid endpoints are listed in the body`)
  res.status(404).send();

})

module.exports = app;
