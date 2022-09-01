var express = require('express');
var router = express.Router();

var name="creator"
var session = false;
var pin="12345"

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log("hello");
  if(session){
    res.redirect('/users')
  }else
    res.render('index')
});

router.post('/', function(req, res) {

const {username,password}=req.body;

if(req.session.authentication){
  console.log("hai");
  res.redirect('/users');
}
else if(name === username && pin === password){
    req.session.authentication = true;
    session=true;
    res.redirect('/users')
  }else{
    res.render('index',{title: "invalid submission"})
  }
});

router.get('/logout', function(req,res){
  req.session.destroy();
  session=false;
  res.redirect('/');
});

module.exports = router;
