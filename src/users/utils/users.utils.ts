import { faker } from '@faker-js/faker';

export const generateFakeUsers = (limit: number) => {
  return [...Array(limit).fill(null).keys()].map(() => generateFakeUser());
};

export const generateFakeUser = () => ({
  name: faker.person.fullName(),
});

export function fakeUsersGenerator(totalItems: number, chunkSize: number) {
  return {
    from: 1,
    totalItems,
    step: chunkSize,
    *[Symbol.iterator]() {
      for (
        let value = this.from;
        value <= this.totalItems;
        value += this.step
      ) {
        yield generateFakeUsers(
          this.totalItems < this.step ? this.totalItems : this.step,
        );
      }
    },
  };
}
