const Sequelize = require('sequelize');
const usersModel = require('./models/users')
const worksModel = require('./models/works')
const softwareModel = require('./models/softwares')
const skillModel = require('./models/skills')
const schoolModel = require('./models/schools')

const sequelize = new Sequelize('curriculumDB','root','micontra3',{
    host:'localhost',
    dialect:'mysql'
})

const User = usersModel(sequelize,Sequelize);
const Skill = skillModel(sequelize,Sequelize);
const Software = softwareModel(sequelize,Sequelize);
const Work = worksModel(sequelize,Sequelize);
const School = schoolModel(sequelize,Sequelize);

sequelize.sync({force: false}).then(()=>{
    console.log('tablas sincronizadas');
})


module.exports = {
    User,
    Skill,
    Software,
    Work,
    School
}