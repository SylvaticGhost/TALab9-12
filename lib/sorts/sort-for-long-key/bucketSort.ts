import insertSort from "@/lib/sorts/simple-sorts/insertSort";

export default function bucketSort(arr: number[]): number[] {
    const n = arr.length;
    const buckets:number[][] = new Array(n).fill(0).map(() => []);
    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const bucketSize = Math.floor((max - min) / n) + 1;
    for (let i = 0; i < n; i++) {
        const index = Math.floor((arr[i] - min) / bucketSize);
        buckets[index].push(arr[i]);
    }
    let result : number[] = [];
    for (let i = 0; i < n; i++) {
        result = result.concat(insertSort(buckets[i]));
    }
    return result;
}