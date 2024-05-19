function leonardoNumber(n: number): number {
    if (n < 2)
        return 1;
    
    return leonardoNumber(n - 1) + leonardoNumber(n - 2) + 1;
}

function heapify(arr: number[], start: number,  end: number) {
    let i = start;
    let j = 0;
    let k = 0;
    
    while (k < end - start + 1) {
        if (k & 0xAAAAAAAA) {
            j += i;
            i = i >> 1;
        }
        else {
            i += j;
            j = j >> 1;
        }
        
        k++;
    }
    
    while (i > 0) {
        j = j >> 1;
        k = i + j;
        
        while(k < end) {
            if (arr[k] > arr[k - i])
                break;
            [arr[k], arr[k - i]] = [arr[k - i], arr[k]];
            k += i;
        }
        i = j;
    }
}

export default function smoothSort(arr: number[]): number[] { 
    const n = arr.length;
    
    let p = n - 1;
    let q = p;
    let r = 0;
    
    while (p > 0) {
        if ((r & 0x03) == 0)
            heapify(arr, r, q);
        
        if (leonardoNumber(r) == p)
            r += 1;
        else {
            r -= 1;
            q = q -leonardoNumber(r);   
            heapify(arr, r, q);
            q = r - 1;
            r++;
        }
        
        [arr[0], arr[q]] = [arr[q], arr[0]];
        p--;
    }
    
    
    for (let i = 0; i < n - 1; i++) {
        let j = i + 1;
        while (j > 0 && arr[j] < arr[j - 1]) {
            [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
            j--;
        }
    }
    
    return arr;
}