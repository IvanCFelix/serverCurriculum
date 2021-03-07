module.exports= (sequelize,type)=>{
    return sequelize.define('works', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: type.STRING
          },
          job: {
            type: type.STRING
          },
          jobDescription: {
            type: type.STRING
          }
    });
}   