import { Country } from "../Types/Types"
import Table from "./Table"

export default class Countries extends Table<Country> {
  constructor() {
    super()
  }

  public getByCountryName(countryName: string): Country | undefined {
    return this.data.find(({ name }) => name.toLowerCase() === countryName.toLowerCase())
  }
}