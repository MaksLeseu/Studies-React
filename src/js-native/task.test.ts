import {getBanknoteList, getSum, getTriangleType, isEvenIndexSumGreater, isSquareGreater, sum} from "./task";
import exp from "constants";

test('Get numbers and return sum numbers', () => {

    expect(sum(10, 10, 10)).toBe(30)
    expect(sum(3, 5, 7, 6, 4, 9)).toBe(34)
    expect(sum(1, 1, 1, 6)).toBe(9)
    expect(sum(0)).toBe(0)
})

// 2. TASK
test('Checked triangle', () => {
    expect(getTriangleType(1, 1, 1)).toBe('10')

    expect(getTriangleType(2, 3, 3)).toBe('01')
    expect(getTriangleType(3, 3, 2)).toBe('01')
    expect(getTriangleType(3, 2, 3)).toBe('01')

    expect(getTriangleType(4, 5, 3)).toBe('11')

    expect(getTriangleType(2, 2, 10)).toBe('00')
    /*expect(getTriangleType(2, 10, 2)).toBe('00')*/
})

// 3. TASK
test('return correct sum of digits', () => {
    expect(getSum(1)).toBe(1)
    expect(getSum(123)).toBe(6)
    expect(getSum(1234)).toBe(10)
    expect(getSum(1000)).toBe(1)
})

// 4. TASK
test('Check sum even and odd indices', () => {
    expect(isEvenIndexSumGreater([1, 2, 8, 5])).toBe(true)
    expect(isEvenIndexSumGreater([1, 2, 3, 6])).toBe(false)
})

// 5. TASK
test('Area circle should be less than or equal', () => {
    expect(isSquareGreater(100, 200)).toBe(true)
    expect(isSquareGreater(200, 200)).toBe(false)
    expect(isSquareGreater(220, 200)).toBe(false)
})

// 6. TASK
test('getBanknoteList', () => {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]

    /*expect(getBanknoteList(60)).toBe([50, 10])*/
    expect(getBanknoteList(100)).toBe([100])
    /*expect(getBanknoteList(150)).toBe([100, 50])
    expect(getBanknoteList(2000)).toBe([1000, 1000])*/
})