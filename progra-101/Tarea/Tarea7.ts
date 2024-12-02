export function maximo(a:number,b:number,c:number) {
    
    if ( a > b && a > c) {
        return a;
    } else if (b > a && b > c) {
        return b;
    } else {
        return c;
    }

}

let maxValue = maximo(8,1,56);
console.log(maxValue);
