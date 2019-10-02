const express = require('express');
const {
  subjectPage,
  logout,
  classActivities,
  homeworks,
  login,
  signupParent,
  teacherProfile,
  parentPRofile,
} = require('../controllers');

const { auth } = require('../controllers/middlewares');

const router = express.Router();

router.post('/signup/parent', signupParent);
router.post('/login', login);
router.use(auth);
router.get('/student/:id', subjectPage);
router.get('/profile/teacher/:id', teacherProfile);
router.get('/profile/parent/:id', parentPRofile);
router.get('/subjects/:subjectId/homeworks/:classId', homeworks);
router.get('/subjects/:subjectId/activities/:classId', classActivities);
router.get('/logout', logout);

module.exports = router;
