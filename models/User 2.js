// header space


module.exports = function (sequelize, DataTypes) {
    var TeamMember = sequelize.define("TeamMember",
     {
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
      team: {
        type: DataTypes.BOOLEAN,
        default: true,
        allowNull: false,
      },
       email: {
         type: DataTypes.STRING,
         allowNull: false,
         unique: true,
         validate: {
           isEmail: true
         }
       },
       password: {
         type: DataTypes.STRING,
         allowNull: false,
         validate: {
           len: [6]
         }
       },
      }, 
    { timestamps: false },
    );

      // associating Team Members to Project Managers, Projects, Tasks and Role
      TeamMember.associate = function(models){
        // Each Team Member belongs to one Project Manager
        models.TeamMember.belongsTo(models.ProjectManager)
        // Each Team Member has one Project
        models.TeamMember.hasOne(models.Project)
        // Each Team Member has one Task
        models.TeamMember.hasOne(models.Task)
      }

    return TeamMember;
  };