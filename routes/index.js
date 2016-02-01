var express = require('express');
var router = express.Router();
var fs = require('fs');
var code_converter = require('./masterJsontoCommitJson');
var mongoose = require('mongoose');
var schema = require('./org_data_schema');
//mongoose.connect('mongodb://localhost:27017/wipro');

var commit_data = mongoose.model('commit_data',schema);

/* GET home page. */

router.get('/', function(req, res) {
  res.render('contributors', { title: 'Contributors Graph' } );
});

router.get('/contributersGraph', function(req, res) {
  res.render('contributors', { title: 'Contributors Graph' } );
});

//console.log("We are in the index part");
//mongoose.connection.close()
//   router.get('/', function(req, res, next) {
//
//   res.render('index', { title: 'Code Frequency Chart' });
// });
// router.get("/codeFrequencyData",function(req,res,next){
//   var jsonData = fs.readFileSync("data/codeFrequency.json");
//   jsonData = JSON.parse(jsonData);
//   res.json(jsonData);
// });
//
// router.get('/codeFrequencyGraph', function(req, res, next) {
//   res.render('index', { title: 'Code Frequency Chart' });
// });

//



  // commit_data.find().populate('commitDate','insertion','deletion').exec(function(error,data){
  //   if(error){
  //     console.log("not able to retrieve the data from database");
  //   }
  //   else{
  //     console.log("we are able to fetch the data");
  //   }
  // });

  // res.send("we got into index file");
  // res.end("we will keep you informed");
//});

module.exports = router;



//not concerned about the previous code
  //var insert_new = [];
  // for(var j=0;j<4;j++)
  // {
  //   request({
  //     url: 'https://api.github.com/repos/nodejs/node/commits?per_page=100&page=' + j, //URL to hit
  //     //url: 'https://www.google.com',
  //     // qs: {from: 'blog example', time: +new Date()}, //Query string data
  //     method: 'GET', //Specify the method
  //     headers: { //We can define headers too
  //         'User-Agent' : "abhinavtdgp",
  //         'Content-Type': 'MyContentType',
  //         'Custom-Header': 'Custom Value'
  //     }
  // }, function (error, response, body) {
  //     // if (!error && response.statusCode == 200) {
  //     //     console.log(body); // Show the HTML for the Modulus homepage.
  //     // }
  //     var obj ={};
  //     var json = JSON.parse(body);
  //     console.log(json.length);
  //     for(var i=0;i<json.length;i++)
  //     {
  //       obj["commit_id"]=json[i]["sha"];
  //       obj["repo"]="node";
  //       obj["author"]=json[i]["commit"]["author"];
  //       obj["commiter"]=json[i]["commit"]["committer"];
  //       obj["commit_date"]=json[i]["commit"]["committer"]["date"];
  //       insert_new[i]=obj;
  //     }
  //     //res.send(insert_new);
  //     //console.log(insert_new);
  //     fs.appendFile('./message.json', JSON.stringify(insert_new), function (err) {
  //       if(err)
  //       {
  //         console.log(err);
  //       }
  //       else{
  //         console.log("Successfully loaded the data");
  //       }
  //     });
  // });
  //
  // }

  // var destination = fs.createWriteStream("./sampleData.json");
  // request('https://api.github.com/repos/nodejs/node/commits').pipe(destination);
  // console.log(destination);
   //res.render('index', { title: 'Express' });
