module.exports= (sequelize,type)=>{
    return sequelize.define('users', {
        id:{
            type: type.INTEGER,
            primaryKey: true,
            autoIncrement:true
        },
        name: {
            type: type.STRING           
            
          },
          profesion: {
            type: type.STRING
          },
          description:{
            type: type.TEXT
          },
          email:{
            type: type.STRING
          },
          phone:{
            type: type.STRING
          },
          dress:{
            type: type.STRING
          },
          birthDate:{
            type: type.STRING
          },
          facebook:{
            type: type.STRING
          },
          twitter:{
            type: type.STRING
          },
          linkedin:{
            type: type.STRING
          },
          github:{
            type: type.STRING
          },
          imgProfile:{
            type: type.TEXT('long')
          }
    });
}   