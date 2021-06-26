// start your server here
const server = require("./api/server.js")

const port = process.env.port || 4000

server.listen(port, () => {
  console.log(`Server is currently running on port ${port} my incredible friend!`)
})