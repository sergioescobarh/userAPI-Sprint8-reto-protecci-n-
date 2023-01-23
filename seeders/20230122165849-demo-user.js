'use strict';
const Sequelize = require('sequelize');

module.exports = {
  up:(queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Users', [{
    firtName: 'Diana',
    lastName: 'Arroyave',
    email: 'dianisa@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
},
down: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Users', null, {});
}
};

