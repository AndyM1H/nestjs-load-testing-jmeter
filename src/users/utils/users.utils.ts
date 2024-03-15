import { faker } from '@faker-js/faker';

export const generateFakeUsers = (limit: number) => {
  return [...Array(limit).fill(null).keys()].map(() => generateFakeUser());
};

export const generateFakeUser = () => ({
  name: faker.person.fullName(),
});

export function* generateFakeUsersStream(totalItems, chunkSize) {
  const chunk = [];
  for (let i = 0; i < totalItems / chunkSize; i++) {
    const chunk = generateFakeUsers(
      totalItems < chunkSize ? totalItems : chunkSize,
    );
    yield chunk;
  }

  if (chunk.length > 0) {
    yield chunk;
  }
}

export async function* chunkStream(stream) {
  let chunk;
  for await (const item of stream) {
    chunk = item;
    yield chunk;
  }
}
