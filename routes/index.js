var express = require('express');
var router = express.Router();
const BOOKS = require ('../modal/newbook')
// const book = []



/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});
router.get('/about', function(req, res, next) {
  res.render('about');
});
router.get('/showbook', async function(req, res, next) {
  try {
    const dets = await BOOKS.find()
    res.render('showbook', {dets:dets})
  } catch (error) {
    res.send(error)
  }


  // res.render('showbook' , {book:book});
});
router.get('/register', function(req, res, next) {
  res.render('register');
});
router.get('/resource', function(req, res, next) {
  res.render('resource');
});
router.get('/blogs', function(req, res, next) {
  res.render('blogs');
});
router.get('/bookstore', function(req, res, next) {
  res.render('bookstore');
});
router.post('/registers', async function(req, res, next){
  try {
    const dets = new BOOKS(req.body)
    await dets.save()
    res.redirect("/showbook")
  } catch (error) {
    res.send(error)
  }
})
router.get("/detail/:id", async function( req, res, next){
  try {
    const dets = await BOOKS.findById(req.params.id)
    res.render('detail',{dets:dets})
  } catch (error) {
    res.send(error)
  }
//   book[req.params.index]
// res.render('detail',{book})
});
router.get("/delete/:id", async function(req,res, next){
try {
  await BOOKS.findByIdAndDelete(req.params.id)
  res.redirect('/showbook')
} catch (error) {
  
}


  // book.splice(req.params.index );
  // res.redirect("/showbook")
});

router.get("/update/:id",  async function( req, res, next){
  try {
    
     const dets = await BOOKS.findById(req.params.id)
    res.render('update',{dets:dets})
  } catch (error) {
    res.send(error)
  }
//  let books =  book[req.params.index] 
// res.render('update',{books: books, index: req.params.index})
});
router.post("/update/:id",  async function( req, res, next){
try {
  await BOOKS.findByIdAndUpdate(req.params.id, req.body)
res.redirect("/showbook")
} catch (error) {
  res.send(error)
}



//   book[req.params.index]  = req.body
//  res.redirect("/showbook")
 });

module.exports = router;
