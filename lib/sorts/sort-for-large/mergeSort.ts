﻿export default function mergeSort(arr: number[]): number[] { 
    const merge = (left: number[], right: number[]): number[] => {
        const result = [];
        let i = 0;
        let j = 0;
        
        while (i < left.length && j < right.length) {
            if (left[i] < right[j]) {
                result.push(left[i]);
                i++;
            } else {
                result.push(right[j]);
                j++;
            }
        }
        return result.concat(left.slice(i), right.slice(j));
    };
    
    if (arr.length <= 1) {
        return arr;
    }
    
    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);
    
    return merge(mergeSort(left), mergeSort(right));
}