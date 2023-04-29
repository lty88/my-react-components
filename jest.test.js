/*
 * @Description: 
 * @Author: Ran junlin
 * @Date: 2023-04-28 22:36:52
 * @LastEditTime: 2023-04-28 22:40:05
 * @LastEditors: Ran junlin
 */
test('test common matcher', () => {
  expect( 2 + 2 ).toBe(4)
  expect(2 + 2).not.toBe(3)
})

test('test to be true or false', () => {
  expect(1).toBeTruthy()
  expect(0).toBeFalsy()
})

test('test number', () => {
  expect(4).toBeGreaterThan(3)
  expect(2).toBeLessThan(3)
})

test('test object', () => {
  expect({name: 'viking'}).toEqual({name: 'viking'})
})