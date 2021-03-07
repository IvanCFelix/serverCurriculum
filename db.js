const Sequelize = require('sequelize');
const usersModel = require('./models/users')
const worksModel = require('./models/works')
const softwareModel = require('./models/softwares')
const skillModel = require('./models/skills')
const schoolModel = require('./models/schools')

const database =  'heroku_9394539ca97371e';
const hostDB = 'us-cdbr-east-03.cleardb.com';
const userDB = 'b7850a792f1d44';
const passwordDB = 'c6103c5f' ;
const sequelize = new Sequelize(database, userDB, passwordDB, {
    host: hostDB,
    dialect: 'mysql',
})

const User = usersModel(sequelize, Sequelize);
const Skill = skillModel(sequelize, Sequelize);
const Software = softwareModel(sequelize, Sequelize);
const Work = worksModel(sequelize, Sequelize);
const School = schoolModel(sequelize, Sequelize);

sequelize.sync({ force: false }).then(() => {
    console.log('tablas sincronizadas');
})


module.exports = {
    User,
    Skill,
    Software,
    Work,
    School
}