import getHealthStatus from '../basic'

test('health > 50', () => {
  const player = { name: 'Маг', health: 90 }
  expect(getHealthStatus(player)).toBe('healthy')
})

test('health from 50 to 15', () => {
  const player = { name: 'Маг', health: 50 }
  expect(getHealthStatus(player)).toBe('wounded')
})

test('health < 15', () => {
  const player = { name: 'Маг', health: 10 }
  expect(getHealthStatus(player)).toBe('critical')
})
