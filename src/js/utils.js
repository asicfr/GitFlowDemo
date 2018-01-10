export default {
  immutableShift: arr => arr.slice(1),
  immutableDelete: (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1)),
  immutablePush: (arr, newEntry) => [...arr, newEntry],
  checkFunction: (c, t) => {
    if (typeof c[t] !== 'function') { throw new Error('Invalid Command') }
  }
}
