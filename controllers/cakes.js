const express = require('express');
const router  = express.Router();
const Cake  = require('../models/cake.js');
// FINISH THE INDEX ROUTE
// REnder the index.ejs page from your views
router.get('/', (req, res) => {
  // Telling the model to go ask the db to find all theCake documents
  console.log("index route getting hit");
  Cake.find({}, (error, allTheCakesFromTheDB) => {
    console.log("db query finshing");
    if(error){
      res.send(error);
      // console.log(error)
    } else {
      res.render('index.ejs', {cakes: allTheCakesFromTheDB});
    }
  })

});


router.post('/', (req, res) => {
  console.log(req.body, "<-- req.body will have the contents of the form");
  Cake.create(req.body, (err, createdCakeFromTheDB) => {
    if(err){
      res.send(err);
    } else {
      // res.send(createdCakeFromTheDB);
      // console.log(createdCakeFromTheDB);
      res.redirect('/cakes');
    }
  })

  // update the cakes the model with the information you sent over

});


router.get('/new', (req, res) => {
  res.render('new.ejs');
});





// router.delete('/:id', (req, res) => {
//  Cake.findByIdAndRemove(req.params.id, (err, foundCake) => {
//       if(err){
//         res.send(err);
//       } else {
//           console.log(typeof foundCake, 'foundCake');
//           if(foundCake != null){
//             res.redirect('/cakes');

//           } else {
//             res.send('no Cake found')
//           }
//       }
//   })
// });


// router.put('/:id', (req, res) => {
//   console.log('=============================')
//   console.log(req.params.id, req.body)

//   cakes[req.params.id] = req.body;

//   res.redirect('/cakes')
// });

// router.get('/:id/edit', (req, res) => {
//   res.render('edit.ejs', {
//     cake: cakes[req.params.id],
//     id: req.params.id
//   });
// })






// // show route, this should return theCake that matches
// // the 'id' in the request url from the client (aka in our case the browser)
// router.get('/:id', (req, res) => {


//  Cake.findOne({_id: req.params.id}, (err, foundCake) => {
//       if(err){
//         res.send(err);
//       } else {
//           console.log(typeof foundCake, 'foundCake');
//           if(foundCake != null){

//               res.render('show.ejs', {
//                 cake: foundCake // this is how we inject js
//                                             // variables into our template
//                                             // inside of show.ejs
//                                             // we have a variable called
//                                             //Cake in show.ejs
//               });

//           } else {
//             res.send('no cake found')
//           }


//       }
//   });


//   // render method takes a template file as its first argument
//   // ejs, handlebars, jade, mustache

// });



module.exports = router;