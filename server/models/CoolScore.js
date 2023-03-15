const CoolScore = db.define('coolnessScore', {
    eventScore: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    videoScore: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    inviteScore: {
      type: Sequelize.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  });
  
//   CoolScore.belongsTo(User);

  module.exports = CoolScore;
