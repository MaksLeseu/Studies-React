import {mult, splitIntoWords, sum} from "./01";

test('sum should be correct', () => {
    //data
    let a = 1;
    let b = 2;
    let c = 3;

    //action
    const result = sum(a, b);
    const result2 = sum(b, c);


    //expect result
    expect(result).toBe(3);
    expect(result2).toBe(5);

});

test('mult should be correct', () => {
   let a = 1;
   let b = 2;
   let c = 3;

   const result = mult(a, b);
   const result2 = mult(b, c);

   expect(result).toBe(2);
   expect(result2).toBe(6);
});

test('splitting into words should be correct', () => {
    let a = 'Hello my world';
    let b = 'Js - the best programming language';

    const result1 = splitIntoWords(a);
    const result2 = splitIntoWords(b);

    expect(result1.length).toBe(3);
    expect(result1[0]).toBe('Hello');
    expect(result1[1]).toBe('my');
    expect(result1[2]).toBe('world');

    expect(result2.length).toBe(5);
    expect(result2[0]).toBe('Js');
    expect(result2[1]).toBe('the');
    expect(result2[2]).toBe('best');
    expect(result2[3]).toBe('programming');
    expect(result2[4]).toBe('language');
});