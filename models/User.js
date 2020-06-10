// header space


module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User",
   { userName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
        len: [2]
    }
},
    first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    manager: {
      type: DataTypes.BOOLEAN,
      default: false,
      allowNull: true,
    },
     email: {
       type: DataTypes.STRING,
       allowNull: true,
       unique: true,
       validate: {
         isEmail: true
       }
     },
     available: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
      allowNull: false,
    },
    }, 
  { timestamps: false },
  );

  // associating Team Members to Project Managers, Projects, Tasks and Role
  User.associate = function(models){
    // Each Team Member has one Task
    User.hasOne(models.Task,{ onDelete: 'cascade' })
    // User has many project members
    User.hasMany(models.ProjectMember, { onDelete: 'cascade' })
    }
    
  return User;
  };