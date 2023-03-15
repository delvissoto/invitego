const Sequelize = require("sequelize");
const db = require("../database/database");

const Event = db.define("event", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  date: {
    type: Sequelize.DATE,
    allowNull: false,
  },
  message: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  invitees: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  videoMessage: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  paymentRequest: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  paymentType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  paymentStatus: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  totalCost: {
    type: Sequelize.FLOAT,
    allowNull: true,
  },
  paidBy: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  paidFor: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
  },
  numConfirmed: {
    type: Sequelize.INTEGER,
    allowNull: false,
    defaultValue: 0
},
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
  },
  userId: {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: 'users',
      key: 'id'
    } 
   }
});

module.exports = Event;
