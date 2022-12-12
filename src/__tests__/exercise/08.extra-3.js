// testing custom hooks
// http://localhost:3000/counter-hook

import * as React from 'react'
import {render, renderHook, screen} from '@testing-library/react'
import useCounter from '../../components/use-counter'
import {act} from 'react-test-renderer'

test('exposes the count and increment/decrement functions', () => {
  const {result} = renderHook(() => useCounter())

  expect(result.current.count).toEqual(0)
  act(() => result.current.increment())
  expect(result.current.count).toBe(1)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(0)
})

test('exposes the count and increment/decrement functions with initialCount set', () => {
  const {result} = renderHook(() => useCounter({initialCount: 1}))
  expect(result.current.count).toEqual(1)
  act(() => result.current.increment())
  expect(result.current.count).toBe(2)
  act(() => result.current.decrement())
  expect(result.current.count).toBe(1)
})

/* eslint no-unused-vars:0 */
