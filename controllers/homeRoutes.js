const router = require('express').Router();


router.get('/', async (req, res) => {
  try {
    res.render('homepage');
    
  } catch (err) {
    res.status(500).json(err);
  }
});

// router.get('/departments/', async (req, res) => {
//   try {
//         //add code to direct to departments page

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/departments/departmentName', async (req, res) => {
//     try {
//           //add code to direct to a specific department. This page will deisplay every product belonging to a department

//     } catch (err) {
//       res.status(500).json(err);
//     }
//   });

// router.get('/cart', withAuth, async (req, res) => {
//   try {
//         //add code to direct to cart page

//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

router.get('/login', (req, res) => {
   //add code to direct to login page

  // If the user is already logged in, redirect the request to another route
  // if (req.session.logged_in) {
  //   res.redirect('/profile');
  //   return;
  // }

  res.render('login');
});

module.exports = router;
