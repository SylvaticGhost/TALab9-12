export default function quickSort(arr: number[]): number[] {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const less = arr.filter((el) => el < pivot);
    const greater = arr.filter((el) => el > pivot);

    return [...quickSort(less), pivot, ...quickSort(greater)];
}

