import Table from "./classes/Table";

type Country = {
  id: number,
  name: string,
  continent: string
}

const countries = new Table<Country>

countries.create({ id: 1, name: 'Brasil', continent: 'América Latina' })
countries.create({ id: 2, name: 'Burkina Faso', continent: 'África' })
countries.create({ id: 3, name: 'Vietnam', continent: 'Ásia' })
countries.create({ id: 4, name: 'Albânia', continent: 'Europa' })
countries.create({ id: 5, name: 'Estados Unidos', continent: 'América do Norte' })

console.log(countries.read())
console.log(countries.read(1))

countries.delete(5)
countries.update(1, { name: 'Brasil', continent: 'América' })
console.log(countries.read())