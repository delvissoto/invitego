const Sequelize = require("sequelize");
const db = require("../database/database");

const Expense = db.define("expense", {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false,
  },
  paidBy: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  paidFor: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: false,
  },
  tags: {
    type: Sequelize.ARRAY(Sequelize.STRING),
    allowNull: true,
  },
  eventId: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Expense;
