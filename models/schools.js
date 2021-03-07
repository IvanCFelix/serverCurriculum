module.exports= (sequelize,type)=>{
    return sequelize.define('schools', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: type.STRING           
            
          },
          description: {
            type: type.TEXT('medium')
          },
          title: {
            type: type.STRING
          }
    });
}   