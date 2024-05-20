import {testRadix} from "@/tests/testRadix";
import radixSort from "@/lib/sorts/sort-for-long-key/radixSort";
import bucketSort from "@/lib/sorts/sort-for-long-key/bucketSort";
import {testLinear} from "@/tests/linearSortTest";

export default function testPage() {
    console.log("Test Page");
    testRadix(radixSort).then((result) => {
        console.log("Radix Sort Test");
        console.log(result);
    });
    
    
    testLinear(bucketSort).then((result : any) => {
        console.log("Bucket Sort Test");
        console.log(result);
    });
    
    return (
        <div>
            <h1>Test Page</h1>
        </div>
    )
}