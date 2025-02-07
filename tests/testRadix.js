﻿import {generateArray, sortingContext} from "./helpers";

export async function testRadix(sortingFunction) {
    let number = 100;
    const times = 7;
    const results = []

    for (let i = 0; i < times; i++) {
        const arr = generateArray(number);
        
        const times = []
        for (let j = 0; j < 3; j++) { 
            times.push(await sortingContext(sortingFunction, arr));
        }
        
        const sortTime = times.reduce((acc, time) => acc + time) / times.length;
        
        results.push({number, sortTime});
        number *= 4;
    }

    return results;
}