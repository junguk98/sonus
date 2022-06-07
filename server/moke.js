const shortId = require("shortid");
const { faker } = require("@faker-js/faker");

const user = {
  id: shortId.generate(),
  name: faker.name.findName(),
};

const generateDummyMusics = (limit) =>
  Array(limit)
    .fill()
    .map(() => ({
      id: shortId.generate(),
      title: faker.music.songName(),
      albumImgUrl: `${faker.image.imageUrl()}?random=${Math.round(
        Math.random() * 1000
      )}`,
      user: {
        id: shortId.generate(),
        name: faker.name.findName(),
        profileImgUrl: `${faker.image.imageUrl()}?random=${Math.round(
          Math.random() * 1000
        )}`,
      },
      plays: faker.datatype.number(1000),
      likes: faker.datatype.number(100),
      comments: faker.datatype.number(100),
    }));

const generateDummyCards = (limit, offset) => {
  const musics = generateDummyMusics(limit);
  return {
    next: offset < 300 ? offset + limit : undefined,
    results: musics,
  };
};

module.exports = { user, generateDummyCards, generateDummyMusics };
