'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users', [
      {
        firstName: 'John',
        lastName: 'Doe',
        email: 'john.doe@example.com',
        password: '$2a$12$U2c50jDp6D93Aik4Yj7x/OsFRAGSG98VwVAQ12kZC3m/AEYgBHdtq',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        firstName: 'Jane',
        lastName: 'Smith',
        email: 'jane.smith@example.com',
        password: '$2a$12$U2c50jDp6D93Aik4Yj7x/OsFRAGSG98VwVAQ12kZC3m/AEYgBHdtq',
        isActive: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  },
};
