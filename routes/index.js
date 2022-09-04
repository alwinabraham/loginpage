var express = require('express');
var router = express.Router();

var name="alwin"
var flag = 0;
var pin="12345"
/* GET home page. */
router.get('/', function(req, res, next) {
  if(req.session.active){
    res.redirect('/users')
  }else if(flag!=0){
    res.render('index',{error:"invalid entry"});
  }else{
    res.render('index');
  }
});

router.post('/',(req,res)=>{

  const {username,password}=req.body;
  
  if(name === username && pin === password ){
    req.session.active=true;
    res.redirect('/users');
  }else{
    flag++;
    res.redirect('/');
  }
})

router.get('/logout',(req,res)=>{
  req.session.destroy();
  flag=0;
  res.redirect('/');
})

module.exports = router;
