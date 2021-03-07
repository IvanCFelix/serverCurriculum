module.exports= (sequelize,type)=>{
    return sequelize.define('softwares', {
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
          },
          idUser:{
            type: type.INTEGER
          }
    });
}   