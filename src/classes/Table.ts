type TId = { id: number }

export default abstract class Table<T extends TId> {
  protected data: T[]

  constructor() {
    this.data = []
  }

  public create(data: T) {
    this.data.push(data)
  }

  public read(id: number = -1): T[] | T {
    if (id === -1) return this.data
    const item = this.getItem(id)
    return item
  }

  public update(id: number, data: Omit<T, 'id'>) {
    const item = this.getItem(id)
    const index = this.getIndex(id)
    const newData = Object.assign(item, data)
    this.data.splice(index, 1, newData)
  }

  public delete(id: number) {
    const index = this.getIndex(id)
    this.data.splice(index, 1)
  }

  private getIndex(id: number): number {
    const index = this.data.findIndex(({ id: itemId }) => itemId === id)
    if (index === -1) throw new Error('Item not found!')
    return index
  }

  private getItem(id: number): T {
    const item = this.data.find(({ id: itemId }) => itemId === id)
    if (!item) throw new Error('Item not found!')
    return item
  }

}