const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiSkillsRouter = require('./api/skills');
const apiSoftwaresRouter = require('./api/sofwares');
const apiWorksRouter = require('./api/works');
const apiSchoolsRouter = require('./api/schools');


router.use('/users',apiUsersRouter);
router.use('/skills',apiSkillsRouter);
router.use('/sofwares',apiSoftwaresRouter);
router.use('/works',apiWorksRouter);
router.use('/users',apiUsersRouter);
router.use('/schools',apiSchoolsRouter);



module.exports= router;