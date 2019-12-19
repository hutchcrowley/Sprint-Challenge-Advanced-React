const help = require('./helpers')

// Describe blocks help identify test blocks and clarify the purpose of a test block

describe('helpers module', () => {
  describe('sum function', () => {
    it('can add two numbers', () => {
      const expectedOutput = 10
      const actualOutput = help.sum(5, 5)
      expect(actualOutput).toBe(expectedOutput)

    })
  })
})
