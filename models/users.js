module.exports= (sequelize,type)=>{
    return sequelize.define('users', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true,
        },
        name: {
            type: type.STRING,           
            
          },
          email: {
            type: type.STRING
          }
    });
}   