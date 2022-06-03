var express = require('express');
var todoconteroler = require('./controler/todocontroler')
var app = express();
var mydb = require("mysql");
app.set('view engine', 'ejs');
const ejsLint = require('ejs-lint');
app.use(express.static('./public'));
const cn = mydb.createConnection({
    host: "localhost",
    user: "root",
    password: "Ujjval@9913",
    database: "student"

});
var r1;
cn.connect((err) => {
    if (err) throw err;
    console.log("connected");
    cn.query("select* from stdetails", (err, result, fileds) => {
        if (err) throw err;
        r1 = result;
        console.log(r1);
    });
});
app.get('/demo', function (req, res) {
    res.render('demo1', { data: r1 });
});
todoconteroler(app)
app.listen(3000);
console.log('you are listion in the port in 3000');