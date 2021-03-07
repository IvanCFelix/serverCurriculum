const router = require('express').Router();

const apiUsersRouter = require('./api/users');
const apiSkillsRouter = require('./api/skills');
const apiSoftRouter = require('./api/softwares');
const apiWorksRouter = require('./api/works');
const apiSchoolsRouter = require('./api/schools');

router.use('/users',apiUsersRouter);
router.use('/skills',apiSkillsRouter);
router.use('/works',apiWorksRouter);
router.use('/softwares',apiSoftRouter);
router.use('/schools',apiSchoolsRouter);

module.exports= router;