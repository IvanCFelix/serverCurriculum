module.exports= (sequelize,type)=>{
    return sequelize.define('skills', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: type.STRING           
            
          },
          domain: {
            type: type.INTEGER
          }
    });
}   