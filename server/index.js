const server = require('./src/app')
const port = process.env.PORT || 8080;


server.listen(port, () => {
  console.log(`Your Knex and Express apps are running successfully on port ${port} !`)
})






