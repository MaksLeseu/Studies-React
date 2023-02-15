export function sum(a: number, b: number) {
    return a + b;
}

export function mult(a:number, b: number) {
    return a * b;
}


export function splitIntoWords(sentens: string) {
    //return ['Hello', 'my', 'world'];
    return sentens.split(' ')
        .filter(w => w !== '' && w !== '-');
}