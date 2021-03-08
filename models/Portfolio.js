module.exports = function(sequelize, DataTypes) {
    var Portfolio = sequelize.define("Portfolio", {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },   
      title: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
        }
      },

      subtitle: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },

      Date: {
        type: DataTypes.DATE,
        primaryKey: true,
      },

      ClientNeeds: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },

      MyPart: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },

      GitHub: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },

      URL: {
        type: DataTypes.TEXT,
        allowNull: false,
        len: [1]
      },

      Image1: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
          }
        },

      Image2: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          len: [1]
          }
        },

        Image3: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
           }
          },

        Image4: {
          type: DataTypes.STRING,
          allowNull: false,
          validate: {
            len: [1]
          }
        },

        galleryImage: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
              len: [1]
            }
          },
          
    });

  
    return Portfolio;
  };
  