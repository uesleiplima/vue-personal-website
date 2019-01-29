const filters = [
  {
    name: 'capitalize',
    execute: str => str.charAt(0).toUpperCase() + str.slice(1)
  }
]

export default filters
