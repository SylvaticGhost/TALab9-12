import {testRadix} from "@/tests/testRadix";
import radixSort from "@/lib/sorts/sort-for-long-key/radixSort";
import bucketSort from "@/lib/sorts/sort-for-long-key/bucketSort";
import {testLinear} from "@/tests/linearSortTest";
import mergeSort from "@/lib/sorts/sort-for-large/mergeSort";
import smoothSort from "@/lib/sorts/sort-for-large/smoothSort";
import quickSort from "@/lib/sorts/quickSort";

export default function testPage() {
    console.log("Test Page");
    
    //testRadix can test all sorts
    testRadix(radixSort).then((result) => {
        console.log("Radix Sort Test");
        console.log(result);
    });
    
    
    testLinear(bucketSort).then((result : any) => {
        console.log("Bucket Sort Test");
        console.log(result);
    });
    
    
    testRadix(mergeSort).then((result) => {
        console.log("Merge Sort Test");
        console.log(result);
    });
    
    testRadix(smoothSort).then((result) => {
        console.log("Smooth Sort Test");
        console.log(result);
    });
    
    testRadix(quickSort).then((result) => { 
        console.log("Quick Sort Test");
        console.log(result);
    });
    
    
    return (
        <div>
            <h1>Test Page</h1>
        </div>
    )
}