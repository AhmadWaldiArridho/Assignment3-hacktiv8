'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Photos", [{
      title: "Foto Pertama Milik UserId 1",
      caption: "ini foto pertama milik UserId 1",
      image_url: "https://photopertama.com",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Foto Pertama Milik UserId 1",
      caption: "ini foto pertama milik UserId 2",
      image_url: "https://photopertama2.com",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      title: "Foto Pertama Milik UserId 3",
      caption: "ini foto pertama milik UserId 3",
      image_url: "https://photopertama3.com",
      UserId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
