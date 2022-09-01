var express = require('express');
var router = express.Router();

const authentication= (req,res,next) => {
  console.log(req.session.authentication);
 if(req.session.authentication){
  next()
 }else{
  res.redirect('/')
 }
}

/* GET users listing. */
router.get('/', authentication ,function(req, res, next) {
  let items=[
    {
      name:"lenovo l1",
      category:"Laptop",
      image:"https://i.pcmag.com/imagery/reviews/02iUKspk2dlCepjJYoqboCg-1.fit_scale.size_1028x578.v1628607795.jpg",
      description:"This is Laptop"
     
    },
    {
      name:"lenovo s1",
      category:"Laptop",
      image:"https://i.pcmag.com/imagery/reviews/02iUKspk2dlCepjJYoqboCg-1.fit_scale.size_1028x578.v1628607795.jpg",
      description:"This is Laptop"
      
    },
    {
      name:"lenvo l2",
      category:"Laptop",
      image:"https://i.pcmag.com/imagery/reviews/02iUKspk2dlCepjJYoqboCg-1.fit_scale.size_1028x578.v1628607795.jpg",
      description:"This is Laptop"
      
    },
    {
      name:"lenvo x pro",
      category:"Laptop",
      image:"https://i.pcmag.com/imagery/reviews/02iUKspk2dlCepjJYoqboCg-1.fit_scale.size_1028x578.v1628607795.jpg",
      description:"This is Laptop",
      
    }
  ]

  res.render('home',{items})
});

module.exports = router;
