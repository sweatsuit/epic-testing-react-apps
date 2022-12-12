// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import useCounter from '../../components/use-counter'
import userEvent from '@testing-library/user-event'
import {act} from 'react-test-renderer'

let result
function TestComponent(props) {
  result = useCounter(props)
  return null
}

test('exposes the count and increment/decrement functions', () => {
  render(<TestComponent />)
  const {_, increment, decrement} = result
  expect(result.count).toEqual(0)
  act(() => increment())
  expect(result.count).toBe(1)
  act(() => decrement())
  expect(result.count).toBe(0)
})

/* eslint no-unused-vars:0 */
