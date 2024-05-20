import {generateArray, sortingContext} from "./helpers";

export async function testLinear(sortingFunction) { 
    let number = 1000;
    const times = 6;
    const results = []
    const grow = 1000;

    for (let i = 0; i < times; i++) {
        const arr = generateArray(number);
        
        const times = []
        for (let j = 0; j < 2; j++) { 
            times.push(await sortingContext(sortingFunction, arr));
        }
        
        const sortTime = times.reduce((acc, time) => acc + time) / times.length;
        
        results.push({number, sortTime});
        number += grow;
    }

    return results;
}