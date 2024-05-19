export default function radixSort(arr: number[]): number[] {
    const max = Math.max(...arr);
    let exp = 1;
    while (Math.floor(max / exp) > 0) {
        arr = countingSort(arr, exp);
        exp *= 10;
    }
    return arr;
}

function countingSort(arr: number[], exp: number): number[] {
    const n = arr.length;
    const output = new Array(n);
    const count = new Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        count[Math.floor(arr[i] / exp) % 10]++;
    }

    for (let i = 1; i < 10; i++) {
        count[i] += count[i - 1];
    }

    for (let i = n - 1; i >= 0; i--) {
        output[count[Math.floor(arr[i] / exp) % 10] - 1] = arr[i];
        count[Math.floor(arr[i] / exp) % 10]--;
    }

    for (let i = 0; i < n; i++) {
        arr[i] = output[i];
    }

    return arr;
}