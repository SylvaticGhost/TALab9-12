export default function countingSort (array: number[]) :number[] {
    const max = Math.max(...array);
    const min = Math.min(...array);
    
    const countArray: number[] = new Array(max - min + 1).fill(0);
    const sortedArray: number[] = new Array(array.length);
    
    for (let i = 0; i < array.length; i++) {
        countArray[array[i] - min]++;
    }
    
    for (let i = 1; i < countArray.length; i++) {
        countArray[i] += countArray[i - 1];
    }
    
    for (let i = array.length - 1; i >= 0; i--) {
        sortedArray[countArray[array[i] - min] - 1] = array[i];
        countArray[array[i] - min]--;
    }
    
    return sortedArray;
} 