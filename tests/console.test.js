const analyse = require('../src/js/analyse.js')

test('commit', () => {
    expect(analyse("git commit")).toBe("git commit");
})

test('push', () => {
    expect(analyse("git push")).toBe("git push");
})

test('push', () => {
    expect(analyse("a")).toBe("invalid command");
})