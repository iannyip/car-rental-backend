const faker = require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {
  const carsList = [
      {
        name: 'fish',
        created_at: new Date(),
        updated_at: new Date(),
      },
      
    ];

    // Insert categories before items because items reference categories
    let categories = await queryInterface.bulkInsert(
      'cars',
      carsList,
      { returning: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
