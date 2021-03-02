const Sequelize = require('sequelize');
const usersModel = require('./models/users')

const sequelize = new Sequelize('curriculumDB','root','micontra3',{
    host:'localhost',
    dialect:'mysql'
})

const User = usersModel(sequelize,Sequelize);

sequelize.sync({force: false}).then(()=>{
    console.log('tablas sincronizadas');
})


module.exports = {
    User
}