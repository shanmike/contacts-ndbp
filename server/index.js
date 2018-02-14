const express = require(`express`)
    , cors = require(`cors`)
    , bodyParser = require(`body-parser`)
    , ctrl = require(`./server`);

const port = 3005
    , app = express();

app.use(bodyParser.json())

app.get(`/api/contacts`, ctrl.readContact)
app.post(`/api/contacts`,ctrl.createContact)
app.put(`/api/contacts/:id`, ctrl.updateContact)
app.delete(`/api/contacts/:id`,ctrl.deleteContact)

app.listen(port, ()=>console.log(`Listening on port ${port}`))