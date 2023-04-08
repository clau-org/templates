import { describe, test } from 'vitest'
import { hello } from '../../src/composables/hello'

describe('Hello composable', async () => {
  test('Hello function test', ({ expect }) => {
    const result = hello()
    expect(result).toBe('Hello from <NAME>')
  })
})
