module.exports = function (sequelize, DataTypes) {
  var Project = sequelize.define("Project",
   {
    project_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    project_status: {
      type: DataTypes.DECIMAL(2, 2),
      allowNull: true,
    },
  }, 
  { timestamps: false },
  );
  // associating Projects table to Tasks, Team Members and Project Managers
  Project.associate = function(models){
  // Each Project belongs to A Project Manager
  Project.belongsTo(models.User, { as: "ProjectManager" }),
  
  // models.Project.hasMany(models.ProjectMembers),
  
  // Each Project can have many Tasks
  Project.hasMany(models.Task)
}
  return Project;
}