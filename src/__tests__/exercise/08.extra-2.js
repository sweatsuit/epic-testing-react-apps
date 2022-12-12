// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import useCounter from '../../components/use-counter'
import {act} from 'react-test-renderer'

function setup({initialProps} = {}) {
  let result = {}
  function TestComponent() {
    Object.assign(result, useCounter(initialProps))
    return null
  }
  render(<TestComponent />)
  return result
}

test('exposes the count and increment/decrement functions', () => {
  const result = setup()

  expect(result.count).toEqual(0)
  act(() => result.increment())
  expect(result.count).toBe(1)
  act(() => result.decrement())
  expect(result.count).toBe(0)
})

test('exposes the count and increment/decrement functions with initialCount set', () => {
  const result = setup({initialProps: {initialCount: 1}})

  expect(result.count).toEqual(1)
  act(() => result.increment())
  expect(result.count).toBe(2)
  act(() => result.decrement())
  expect(result.count).toBe(1)
})

/* eslint no-unused-vars:0 */
