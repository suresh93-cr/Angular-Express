const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const {v4 : uuidv4} = require('uuid')
const database = require('mime-db');

const app = express();

app.use(cors());
app.use(bodyparser.json());

// database connection

const db = mysql.createConnection({
    host: 'localhost',
    user: 'suresh',
    password: 'Mysql@123',
    database: 'vijay',
    // port: 3306
});

// check database connection

db.connect(err => {
    if (err) { console.log(err, 'db   err'); }
    console.log('database connected ...');
})

// get data
app.get('/Register', (req, res) => {

    let qr = `select * from Register`;

    db.query(qr, (err, result) => {

        if (err) {
            console.log(err, 'errs');
        }

        if (result.length > 0) {
            res.send({
                message: 'all user data',
                data: result
            });
        }
    });

});

//get single data
app.get('/Register/:id', (req, res) => {
    let gID = req.params.id;
    let qr = `select * from Register where id = ${gID}`;
    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        if (result.length > 0) {
            res.send({
                message: 'get single data',
                data: result
            });
        }
        else {
            res.send({
                message: 'data not found'
            })
        }

    });
});


// create data

app.post('/Register', (req, res) => {
    console.log(req.body, 'createdata');
    let uniqueId = uuidv4()
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    let eMail = req.body.email;
    let dob = req.body.dob;
    let phoneNumber = req.body.phonenumber;

    let qr = `insert into Register(uniqueid,firstname,lastname,email,dob,phonenumber)
                  values('${uniqueId}','${firstName}','${lastName}','${eMail}','${dob}','${phoneNumber}')`;

    db.query(qr, (err, result) => {
        if (err) { console.log(err); }
        res.send({
            message: 'data inserted'
        })

    });

});

// update single data

app.put('/Register/:id', (req, res) => {

    console.log(req.body, 'updatedata');

    let gID = req.params.id;
    let firstName = req.body.firstname;
    let lastName = req.body.lastname;
    let eMail = req.body.email;
    let dob = req.body.dob;
    let phoneNumber = req.body.phonenumber;

    let qr = `update Register set firstname = '${firstName}', lastname= '${lastName}', email = '${eMail}', dob = '${dob}', phonenumber = '${phoneNumber}'
             where id = ${gID}`;

    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send({

            message: 'data updated'
        });


    });
});

//delete single data

app.delete('/Register/:id', (req, res) => {

    let qID = req.params.id;

    let qr = `delete from Register where id = '${qID}'`;
    db.query(qr, (err, result) => {

        if (err) { console.log(err); }

        res.send(
            {
                message: 'data deleted'
            }
        )
    });
    
});









app.listen(3000, () => {
    console.log('server running');
})
