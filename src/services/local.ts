import { faker } from "@faker-js/faker";

export const fetchData = async () => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      const data = Array.from({ length: 100 }, () => faker.person.fullName());
      resolve(data);
    }, 500);
  });
};
