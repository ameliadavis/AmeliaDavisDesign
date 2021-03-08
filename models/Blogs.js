module.exports = function(sequelize, DataTypes) {
  var Blogs = sequelize.define("Blogs", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },   
    title: {
      type: DataTypes.STRING,
      allowNull: false,
     
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    Date: {
      type: DataTypes.DATE,
      primaryKey: true,
    },
    Image1: {
      type: DataTypes.STRING,
      allowNull: true,
      },
    Image2: {
      type: DataTypes.STRING,
      allowNull: true,
      },
      Image3: {
        type: DataTypes.STRING,
        allowNull: true,
        },
      Image4: {
        type: DataTypes.STRING,
        allowNull: true,
     
      },
      galleryImage: {
        type: DataTypes.STRING,
        allowNull: false,
      },
  });
  return Blogs;
};

// Blogs.sync({}).then(() =>{
//   return blog.create( {
//     title: 'MyFirst post',
//     Body: 'Lorem ipsum ',
//     Date: 'July 27, 2020',
//   })
// })