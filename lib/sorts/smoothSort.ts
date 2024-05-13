export default function smoothSort(arr: number[]): number[] { 
    const sift = (arr: number[], l: number, r: number) => {
        let i = l;
        let j = 2 * i + 1;
        let x = arr[i];
        
        while (j <= r) {
            if (j < r && arr[j] < arr[j + 1]) {
                j++;
                
            }
            if (x >= arr[j]) {
                break;
            }
            arr[i] = arr[j];
            i = j;
            j = 2 * i + 1;
        }
        arr[i] = x;
    }
    
    const heapify = (arr: number[]) => {
        for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
            sift(arr, i, arr.length - 1);
        }
    }
    
    heapify(arr);
    for (let i = arr.length - 1; i > 0; i--) {
        const temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;
        sift(arr, 0, i - 1);
    }
    
    return arr;
    
}