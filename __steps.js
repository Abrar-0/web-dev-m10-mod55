/*
// mongodb connection
create account
create an user with password
whitelist all ip addresses
database ->  connect -> driver -> node.js -> show all code
change the password in URI
-----------

// CREATE - POST
server side---
app.post('/users' .(req,res) => {code})
make the function async to use await inside it
make sure you express.json() middleware
access data from the body -> const user = req.body
const result = await collectionname.insertOne('user')
res.send(result)

client side---
create fetch
add second parameter as an object -> method, header,body
method - post
header - content-type: application/json
body - json.stringify (user)

// READ - GET
server side---
create a cursor = collectionname.find()
const result = await cursor.toArray()

// DELETE
server side---
create app.delete ('users/id', async (req,res) =>{})
specicfy unique objectid to delete the right user
const query = {_id: new ObjectId(id)}
const result = await collectionname.deleteOne(query)

client side---
create dynamic url with id
use fetch and mention delete in the parameter method
set a state using useState to see change in the ui
*/
