// server.js

// BASE SETUP
// =============================================================================

// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');
var axios  = require('axios');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var port = process.env.PORT || 8080;  // set our port

// request({
//     method: 'GET',
//     url: 'https://apis.solarialabs.com/shine/v1/vehicle-thefts?state={2_LETTER_STATE_NAME}&apikey={ENTER_API_KEY}',
//     console.log('Status:', response.statusCode);
//     console.log('Response:', body);
//     });

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)

router.get('/year/:yearId/make/:makeId/model/:modeId', function (req, res) {


    axios.get('https://apis.solarialabs.com/shine/v1/vehicle-stats/fuel-usage', {
        params: {
          year: req.params.yearId,
          make: req.params.makeId,
          model: req.params.modeId,
          apikey: 'bb8GYa9ZI3TbTFRwWhyoBVXlSeIkDFfU'
        }
      }).then( res => console.log(res.data));
  });

// more routes for our API will happen here

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);