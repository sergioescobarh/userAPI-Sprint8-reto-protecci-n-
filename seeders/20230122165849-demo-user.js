'use strict';


module.exports = {
  up:(queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('Users', [{
    firtName: 'Heidy',
    lastName: 'Florez',
    email: 'heidyF@gmail.com',
    createdAt: new Date(),
    updatedAt: new Date()
  }]);
},
down: (queryInterface, Sequelize) => {
  return queryInterface.bulkInsert('User', null, {});
}
};

