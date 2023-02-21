import {mult, splitIntoWords, sum} from "./01";


let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
});

test('result sum', () => {
    //active
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    //expect
    expect(result1).toBe(3);
    expect(result2).toBe(5);
});

test('mult result', () => {
    const result1 = mult(a, b);
    const result2 = mult(b, c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
});

test('sent', () => {
    let sentens = 'Hello my world';
    let sentens2 = 'Js - the best programming language';

    const sent1 = splitIntoWords(sentens);
    const sent2 = splitIntoWords(sentens2);

    expect(sent1.length).toBe(3);
    expect(sent1[0]).toBe('Hello');
    expect(sent1[1]).toBe('my');
    expect(sent1[2]).toBe('world');

    expect(sent2.length).toBe(5);
    expect(sent2[0]).toBe('Js');
    expect(sent2[1]).toBe('the');
    expect(sent2[2]).toBe('best');
    expect(sent2[3]).toBe('programming');
    expect(sent2[4]).toBe('language');
});