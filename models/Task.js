// header space


module.exports = function (sequelize, DataTypes) {
  var Task = sequelize.define("Task",
   {
    task_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [2]
      }
    },
    status: {
      type: DataTypes.ENUM,
      values: [
        'waiting',
        'assigned',
        'active',
        'done'
      ],
      defaultValue: 'waiting'
   },
  }, 
      { timestamps: false },
  );

    // associating Tasks to Projects and Team Members
    Task.associate = function(models){
      // Each Task belongs to one Project
      Task.belongsTo(models.Project)
      // Each Task belongs to one Team Member
      Task.belongsTo(models.User)
    }

    return Task;
};