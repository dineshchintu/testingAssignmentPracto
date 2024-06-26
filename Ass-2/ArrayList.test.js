// ArrayList.test.js

// import ArrayList from './index.js';
const ArrayList = require('./index.js');
describe('ArrayList', () => {
  let arrayList;

  beforeEach(() => {
    arrayList = new ArrayList();
  });

  test('should add elements to the array list', () => {
    arrayList.add(1);
    arrayList.add(2);
    expect(arrayList.size()).toBe(2);
    expect(arrayList.get(0)).toBe(1);
    expect(arrayList.get(1)).toBe(2);
  });

  test('should throw an error when accessing an invalid index', () => {
    expect(() => arrayList.get(-1)).toThrow('Index out of bounds');
    expect(() => arrayList.get(1)).toThrow('Index out of bounds');
  });

  test('should throw an error when removing an invalid index', () => {
    expect(() => arrayList.remove(-1)).toThrow('Index out of bounds');
    expect(() => arrayList.remove(1)).toThrow('Index out of bounds');
  });

  test('should remove elements from the array list', () => {
    arrayList.add(1);
    arrayList.add(2);
    const removedElement = arrayList.remove(0);
    expect(removedElement).toBe(1);
    expect(arrayList.size()).toBe(1);
    expect(arrayList.get(0)).toBe(2);
  });

  test('should return the correct size of the array list', () => {
    expect(arrayList.size()).toBe(0);
    arrayList.add(1);
    expect(arrayList.size()).toBe(1);
    arrayList.add(2);
    expect(arrayList.size()).toBe(2);
  });

  test('should return true if the array list is empty', () => {
    expect(arrayList.isEmpty()).toBe(true);
  });

  test('should return false if the array list is not empty', () => {
    arrayList.add(1);
    expect(arrayList.isEmpty()).toBe(false);
  });

  test('should handle adding and removing multiple elements', () => {
    for (let i = 0; i < 10; i++) {
      arrayList.add(i);
    }
    expect(arrayList.size()).toBe(10);

    for (let i = 0; i < 10; i++) {
      expect(arrayList.remove(0)).toBe(i);
    }
    expect(arrayList.size()).toBe(0);
    expect(arrayList.isEmpty()).toBe(true);
  });
});
