import { expect, test } from 'vitest'

import * as actions from './index'

test('exports actions', () => {
  expect(actions).toMatchInlineSnapshot(`
    {
      "fetchBlockNumber": [Function],
      "requestAccountAddresses": [Function],
      "sendTransaction": [Function],
      Symbol(Symbol.toStringTag): "Module",
    }
  `)
})