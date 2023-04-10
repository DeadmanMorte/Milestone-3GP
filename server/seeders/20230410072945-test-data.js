
require('dotenv').config()

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async(queryInterface, Sequelize)=> {
    await queryInterface.bulkInsert('Users', [{
      firstname: 'Joe',
      lastname: 'Dingle',
      username: 'dingleburg',
      email: 'joe@gmail.com',
      passwordDigest: 'test123', 
      createdAt: new Date(),
      updatedAt: new Date()
    }], {});


    await queryInterface.bulkInsert('Publishes', [{
      username: 'dingleburg',
      caption: 'Hi,my name is joe and this is my first post',
      pic: `http://localhost:${process.env.PORT}/images/golden_retiver_cat_cropped.jpg`,
      createdAt: new Date(),
      updatedAt: new Date()
    }])

    await queryInterface.bulkInsert('Comments', [{
      //doesnt work for some reason
      
      // publish_id: Publishes[0].publish_id,
      // author_id: Users[0].user_id,
      like: false,
      content: 'testing ',
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },
  down: async (queryInterface, Sequelize)=> {
    await queryInterface.bulkDelete('Users', null, {});
    await queryInterface.bulkDelete('Publishes', null, {});
    await queryInterface.bulkDelete('Comments', null, {});
    await queryInterface.bulkDelete('Pasword', null,{});
  }
};
