const {faker} = require('@faker-js/faker');
module.exports = () => {
  const { faker } = require('@faker-js/faker');

  const CATEGORIES_COUNT = 10;
  const ADVERTS_COUNT = 100;

  const data = { }
  data.categories = Array.from(Array(CATEGORIES_COUNT).keys()).map((i) => ({
    id: i,
    title: faker.commerce.department(),
  }));
  data.adverts = Array.from(Array(ADVERTS_COUNT).keys()).map((i) => ({
    id: i,
    title: faker.commerce.productName(),
    price: faker.commerce.price(),
    description: faker.commerce.productDescription(),
    seller: faker.name.firstName(),
    image: `${faker.image.business(400, 400)}?i=${i}`,
    sellerPhone: faker.phone.phoneNumber('+48 ### ### ###'),
    canNegotiate: faker.datatype.boolean(),
    createdOn: faker.date.recent(),
    categoryId: faker.datatype.number(CATEGORIES_COUNT - 1)
  }));
  return data
}
