import {testRadix} from "@/tests/testRadix";

export default function testPage() {
    
    testRadix().then((result) => {
        console.log("Radix Sort Test");
        console.log(result);
    });
    
    return (
        <div>
            <h1>Test Page</h1>
        </div>
    )
}