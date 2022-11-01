let num: number;

num = 22

let num2 = 2

let arr: [number];

// arr.push(23)

type numorbol = boolean | number

let inp: numorbol = 2
inp = true

type mytype = 'first' | 'second' | 'third'


let ranking: mytype

ranking = 'first'

let any: any;
any = 23
any = 'dw'

function square(x: number, y?: number): number {
    if (typeof (y) == "number") console.log('y passed')
    return Math.pow(x, 2)
}

console.log(square(2))
