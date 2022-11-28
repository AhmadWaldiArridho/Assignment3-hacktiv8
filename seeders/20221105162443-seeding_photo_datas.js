'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Photos', [{
        title: 'Foto Jadul',
        caption: 'waktu itu foto ini diambil di rumah',
        image_url: 'https://photojadul.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Foto kenangan',
        caption: 'waktu sd',
        image_url: 'https://photokenangan.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        title: 'Foto Liburan',
        caption: 'waktu di pantai',
        image_url: 'https://photoliburan.com',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ])
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
