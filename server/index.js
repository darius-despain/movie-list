const server = require('./src/app')
const port = 8080;


server.listen(port, () => {
  console.log(`Your Knex and Express apps are running successfully on port ${port} !`)
})






