const analyse = require('../src/js/analyse.js')


const command = ['commit', 'push', 'checkout']

test('commit', () => {
    expect(analyse("git commit")).toEqual(['commit']);
})

test('push', () => {
    expect(analyse("git push")).toEqual(['push']);
})

test('checkout', () => {
    expect(analyse("git checkout master")).toEqual(['checkout','master']);
})