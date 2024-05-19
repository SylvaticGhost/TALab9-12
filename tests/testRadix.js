import {generateArray, sortingContext} from "./helpers";
import radixSort from "../lib/sorts/sort-for-long-key/radixSort";

export async function testRadix() {
    let number = 100;
    const times = 6;
    const results = []

    for (let i = 0; i < times; i++) {
        const arr = generateArray(number);
        
        const times = []
        for (let j = 0; j < 3; j++) { 
            times.push(await sortingContext(radixSort, arr));
        }
        
        const radixTime = times.reduce((acc, time) => acc + time) / times.length;
        
        results.push({number, radixTime});
        number *= 4;
    }

    return results;
}