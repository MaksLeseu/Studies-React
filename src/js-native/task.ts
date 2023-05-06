import * as buffer from "buffer";

export const sum = (...nums: number[]) => {
    let sumNumbers = 0
    for (let i = 0; i < nums.length; i++) {
        sumNumbers = sumNumbers + nums[i]
    }
    return sumNumbers
}

// 2. TASK
/*
Условие при котором треугольника не может быть. Слишком широкое основание
и короткие боковые линии. Т.е. вершина не сойдется при этом - 10 см основание
2 см левая сторона и 2 см правая
*/
export const getTriangleType = (a: number, b: number, c: number) => {
    /*if (a === b && b === c) {
        return '10'
    } else if (a === b && b !== c ||
        b === c && b !== a ||
        a === c && a !== b) {
        return '01'
    } else if () {
        return '00'
    } else {
        return '11'
    }*/

    let isTriangle =  a + b > c && a + c > b && b + c > a // 2 + 2 = 4 > 10 -> false

    if (a === b && b === c) {
        return '10'
    } else if (isTriangle && a === b || b === c || c === a) {
        return '01'
    } else if (isTriangle) {
        return '11'
    } else if (!isTriangle) {
        return '00'
    }
}

// 3. TASK функция принимает параметром целое число и возвращает сумму цифр этого числа
export const getSum = (number: number): number => {
    const arrNumbers = String(number).split('')

    return arrNumbers.reduce((sum, current) => {
        return sum = sum + Number(current)
    }, 0)
// ---------------------------------------------------------- //
    /* Второе решение:
    const string = String(number)
    let sum = 0
    for (let i = 0; i < string.length; i++)
        sum += Number(string[i])
    return sum*/
}

// 4. TASK
export const isEvenIndexSumGreater = (arr: number[]): boolean => {
    let evenNumbers = 0
    let oddNumbers = 0
    for (let i = 0; i < arr.length; i++) {
        (i % 2 === 0) ? evenNumbers = evenNumbers + arr[i]
            : oddNumbers = oddNumbers + arr[i]
    }
    return evenNumbers > oddNumbers
}

// 5. TASK
/*
Свойство Math.PI представляет отношение длины окружности круга к его диаметру, приблизительно равное 3,14159
* */
export const isSquareGreater = (areaCr: number, areaSq: number): boolean => {
    return areaCr / areaSq <= Math.PI / 4
}

// 6. TASK
export const getBanknoteList = (amountOfMoney: number): number[] => {
    const banknotes: number[] = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let newArr = []

    for (let i = 0; i < banknotes.length; i++) {
        if (banknotes[i] === amountOfMoney) {
            newArr.push(banknotes[i])
        }
    }

    return newArr
}


/*
1. Можем сделать перебор массива с банкнотами и провереть на соответсвие,
чтобы вернуть только одну купюру
2. Если соответствия нет, то мы возвращаем с начала
*/


/*const getBanknoteList = (amountOfMoney) => {
    const banknotes = [1000, 500, 100, 50, 20, 10, 5, 2, 1]
    let newArr = []

    /!*for (let i = 0; i < banknotes.length; i++) {
        if (banknotes[i] === amountOfMoney) {
            newArr.push(banknotes[i])
        } else {

        }
    }*!/
    let sum = 0
    for (let i = 0; i < banknotes.length; i++) {
        sum = sum + banknotes[i]
        if (sum === amountOfMoney) break
    }

    return sum
}

console.log(getBanknoteList(1600))
console.log(getBanknoteList(1500))
console.log(getBanknoteList(100))*/


// 7. Task
/*Функция принимает параметром целое не отрицательное число N и возвращает
сумму всех чисел от 0 до N включительноПопробуйте реализовать функцию
без использования перебирающих методов.*/

export function sumFirstNumbers(N: number): number {
    let number = 0
    for (let i = 0; i <= N; i++) {
        number = number + i
    }
    return number
}

// 8. Task
/*Функция getSquarePositiveIntegers принимает параметром массив чисел и
возвращает новый массив. Новый массив состоит из квадратов целых
положительных чисел, которые являются элементами исходгого массива.
    Исходный массив не мутирует.*/

export function getSquarePositiveIntegers(array: Array<number>): Array<number> {

    return array.map(n => n * n)
}
