const shortId = require("shortid");
const { faker } = require("@faker-js/faker");

const user = {
  id: shortId.generate(),
  name: faker.name.findName(),
};

const generateDummyCards = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      User: {
        id: shortId.generate(),
        name: faker.name.findName(),
      },
      title: faker.lorem.sentence(),
      imageUrl: faker.image.image(),
    }));

module.exports = { user, generateDummyCards };
