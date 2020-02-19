var express = require('express');
var session = require('express-session')
var bodyParser = require('body-parser');
var mysql = require('mysql');
var cors = require('cors');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'product',
})

connection.connect(function (error) { 
	if(!!error){
		console.log('Error');
	}else{
		console.log('Connected');
	}
 });

var app = express();
app.use(cors());


// app.set('trust proxy', 1)
// app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true, cookie: { maxAge: 60000 }}));
// app.use(bodyParser.json());


// app.get('/',function(req, res){
// 	res.sendFile(__dirname + '/');
// });

// app.get('/cart',function(req, res){
// 	res.sendFile(__dirname + "/cart");
// });

app.get('/cart', function (req, res) {
	connection.query("SELECT * FROM product", function (error, rows, fields) { 
		if(!!error){
			console.log('Error in query');
		}else{
			res.json(rows);
		}
	 });
});

// app.post('/submit-card', function (req, res) {
// 	req.session.items = req.body;
// 	var sum = 0;
// 	for(var i in req.body) {
// 		sum += (req.body[i].count || 1) * req.body[i].price;
// 	}
// 	req.session.totalValue = sum;
// 	req.session.save(function(){
// 		res.json({
// 			success: true
// 		});
// 	});    
// });

// app.post('/get-total-price', function (req, res) {
// 	res.json({
// 		session: req.session.totalValue || null
// 	});
// });

// app.get('/shipping',function(req, res){
// 	res.sendFile(__dirname + "/src/pages/FormPage");
// });

app.use(express.static(__dirname));

// connection.query("SELECT * FROM product", function (error, rows, fields) { 
// 	if(!!error){
// 		console.log('Error in query');
// 	}else{
// 		console.log("Success");
// 	}
//  });


app.listen(3001);
