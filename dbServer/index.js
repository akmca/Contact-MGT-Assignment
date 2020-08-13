let express = require('express');
let bp = require('body-parser');
let cors = require('cors');
let fs = require('fs');
const contactDataFile = "contact.json";
const port = 5454;


fs.readFile(contactDataFile, (err, data) => {
    if (err) {
        console.log(err);
    } else {
        libConactData = JSON.parse(data);
    }
});

const saveContactDataAndRespond = (resp) => {
    fs.writeFile(contactDataFile, JSON.stringify(libConactData), (err) => {
        if (err) {
            console.log(err);
            resp.status(500);
            resp.end();

        } else {
            resp.status(200);
            resp.end();

        }
    })
}

const parseReqToContact = (req) => (
    {
        cid: req.body.cid,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        mobile: req.body.mobile,
        mail: req.body.mail,
        dateOfBirth: req.body.dateOfBirth,
        gender: req.body.gender,
        group: req.body.group
    }    
);


let libServer = express();

libServer.use(bp.json());
libServer.use(bp.urlencoded({ extended: true }));
libServer.use(cors());

//default request
libServer.get('/', (req, resp) => {
    resp.send("Welcome to Lib Server");
});


libServer.get('/contacts', (req, resp) => {
    resp.send(libConactData.contacts);
});

libServer.get('/contacts/:id', (req, resp) => {
    let contact = libConactData.contacts.find(b => b.cid == req.params.id);
    if (contact) {
        resp.send(contact);
    } else {
        resp.status(404);
        resp.end();
    }

});

libServer.post('/contacts', (req, resp) => {

    let contact = parseReqToContact(req);
    libConactData.contacts.push(contact);
    saveContactDataAndRespond(resp);

});

libServer.put('/contacts', (req, resp) => {
    let contact = parseReqToContact(req);
    let index = libConactData.contacts.findIndex(b => b.cid == contact.cid);
    libConactData.contacts[index] = contact;
    saveContactDataAndRespond(resp);

});

libServer.delete('/contacts/:id', (req, resp) => {
    let index = libConactData.contacts.findIndex(b => b.cid == req.params.id);
    libConactData.contacts.splice(index, 1);
    saveContactDataAndRespond(resp);

});


libServer.listen(port, () => {
    console.log(`Server is ready at ${port}`)
});
