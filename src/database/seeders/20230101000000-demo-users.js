'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        email: 'john.doe@example.com',
        password: '$2a$12$U2c50jDp6D93Aik4Yj7x/OsFRAGSG98VwVAQ12kZC3m/AEYgBHdtq',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'jane.smith@example.com',
        password: '$2a$12$U2c50jDp6D93Aik4Yj7x/OsFRAGSG98VwVAQ12kZC3m/AEYgBHdtq',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
