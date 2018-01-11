const utils = {
  immutableShift: arr => arr.slice(1),
  immutableDelete: (arr, index) => arr.slice(0, index).concat(arr.slice(index + 1)),
  immutablePush: (arr, newEntry) => [...arr, newEntry],
  immutableSplice: (arr, start, deleteCount, ...items) =>
    [...arr.slice(0, start), ...items, ...arr.slice(start + deleteCount)],
  checkFunction: (c, t) => {
    if (typeof c[t] !== 'function') { throw new Error('Invalid Command') }
  }
}

export default utils
