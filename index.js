var express = require('express');
var app = express();
var bodyparser = require("body-parser");
var metrics = require('./metrics');

// parse application/x-www-form-urlencoded
app.use(bodyparser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyparser.json())
app.use(express.static('public_html'));

/**
 * @api {POST} /api/metric post a value for a metric
 * @apiGroup Metric 
 * @apiParam {String} name the name of the metric 
 * @apiParam {String} value floating point value of the metric
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *    }
 * @apiErrorExample {json} unknown metric error
 *    HTTP/1.1 500 Internal Server Error
 */
app.post('/api/metric', function(req, res){
  var metricName = req.body.name;
  var metricValue = parseFloat(req.body.value);

  if (!metricName || metricName.trim().length <= 1 || isNaN(metricValue)) {
    res.sendStatus(400);
    return;
  }
  metrics.post(metricName, metricValue)
  res.sendStatus(200)
});


/**
 * @api {get} /api/metric/:metric get the summary for the specified metric
 * @apiGroup Metric 
 * @apiParam {String} metric the name of the metric 
 * @apiSuccess {Number} mean the arithmetic mean 
 * @apiSuccess {Number} median the median
 * @apiSuccess {Number} min the smallest value posted
 * @apiSuccess {Number} max the largest value posted
 * @apiSuccess {Number[]} values all the historical values, partially sorted
 * @apiSuccessExample {json} Success
 *    HTTP/1.1 200 OK
 *    {
 *       "mean": 22,
 *       "median": 22,
 *       "min": 22,
 *       "max": 22,
 *       "values": [
 *         22
 *       ]
 *    }
 * @apiErrorExample {json} unknown metric error
 *    HTTP/1.1 500 Internal Server Error
 * @apiErrorExample {json} metric not found 
 *    HTTP/1.1 404 Metric Not Found 
 */
app.get('/api/metric/:metric', function(req, res){
  var metric = metrics.get(req.params.metric);
  if (!metric) {
    res.sendStatus(404);
    return;
  }
  res.send(metric);
});

app.listen(8080, function(){
   console.log("Your server is started: http://localhost:8080");
});
