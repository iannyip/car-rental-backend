const faker = require('faker');


module.exports = {
  up: async (queryInterface, Sequelize) => {
    const carsList = [];
    for (let i = 0; i < 100; i += 1){
      carsList.push({
        car: faker.vehicle.vehicle(),
        created_at: new Date(),
        updated_at: new Date(),
      })
    }

    // Insert categories before items because items reference categories
    let cars = await queryInterface.bulkInsert(
      'cars',
      carsList,
      { returning: true }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('cars', null, {});
  }
};
