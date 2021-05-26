const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    //add code to direct to homepage
    
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/departments/', async (req, res) => {
  res.render('departments');
  // try {
  //       //add code to direct to departments page

  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

// router.get('/departments/departmentName', async (req, res) => {
//     try {
//           //add code to direct to a specific department. This page will deisplay every product belonging to a department

//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

//router.get('/cart', withAuth, async (req, res) => {
router.get('/cart', (req, res) => {
res.render('cart');
  // try {
  //       //add code to direct to cart page

  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/login', (req, res) => {
  //  //add code to direct to login page

  // // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});

router.get('/departments/Games', async (req, res) => {
  res.render('Games');
  // try {
  //       //add code to direct to departments page

  // } catch (err) {
  //   res.status(500).json(err);
  // }
});


router.get('/departments/Music', async (req, res) => {
  res.render('Music');
  // try {
  //       //add code to direct to departments page

  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/departments/Books', async (req, res) => {
  res.render('Books');
  // try {
  //       //add code to direct to departments page

  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

router.get('/departments/Toys', async (req, res) => {
  res.render('Toys');
  // try {
  //       //add code to direct to departments page

  // } catch (err) {
  //   res.status(500).json(err);
  // }
});

module.exports = router;
