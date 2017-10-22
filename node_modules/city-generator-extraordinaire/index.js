const faker = require('faker')

function createCities(num){
  //returns an array of city objects
  const result = []
  for (let i = 0; i < num; i++) {
    const name = faker.address.city()
    const id = faker.random.uuid()
    const population = faker.random.number() * 10
    const country = faker.address.country()
    const zipCode = faker.address.zipCode()
    const motto = faker.lorem.sentence()
    const city = {}
    city[name] = {population, country, zipCode, motto, id}
    result.push(city)
  }
  return result
}

module.exports = createCities
