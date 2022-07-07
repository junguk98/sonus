import { faker } from '@faker-js/faker';

export const generateDummyMusics = (limit: any) =>
  Array(limit)
    .fill(0)
    .map(() => ({
      id: faker.random.numeric(5),
      title: faker.music.songName(),
      albumImgUrl: `${faker.image.imageUrl()}?random=${Math.round(
        Math.random() * 1000,
      )}`,
      user: {
        id: faker.random.numeric(5),
        name: faker.name.findName(),
        profileImgUrl: `${faker.image.imageUrl()}?random=${Math.round(
          Math.random() * 1000,
        )}`,
      },
      plays: faker.datatype.number(1000),
      likes: faker.datatype.number(100),
      comments: faker.datatype.number(100),
    }));

export const generateDummyCards = (limit: number, offset: number) => {
  const musics = generateDummyMusics(limit);
  return {
    next: offset < 300 ? offset + limit : undefined,
    results: musics,
  };
};
