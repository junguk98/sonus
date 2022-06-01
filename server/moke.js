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

const generateDummyMusics = (number) =>
  Array(number)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      title: faker.music.songName(),
      artist: faker.name.findName(),
      genre: faker.music.genre(),
      hearts: parseInt(faker.random.numeric(4, { allowLeadingZeros: true })),
    }));

module.exports = { user, generateDummyCards, generateDummyMusics };
