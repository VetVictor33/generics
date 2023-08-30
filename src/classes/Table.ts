export default class Table<T>{
  private data: T[]

  constructor() {
    this.data = []
  }

  public create(data: T) {
    this.data.push(data)
  }

  public read(index: number = -1): T[] | T {
    if (index === -1) return this.data
    return this.data[index]
  }

  public update(index: number, data: T) {
    this.data.splice(index, 1, data)
  }

  public delete(index: number) {
    this.data.splice(index, 1)
  }

}