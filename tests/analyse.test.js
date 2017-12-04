const analyse = require('../src/js/analyse.js')

test('commit', () => {
    expect(analyse("git commit")).toBe("commit");
})

test('push', () => {
    expect(analyse("git push")).toBe("push");
})