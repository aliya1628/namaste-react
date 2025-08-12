import { Sum } from "../components/JavascriptForTesting";

test("should return the sum of two numbers",()=>{
    const result = Sum(2,3);

    //assertion
    expect(result).toBe(5);
    });

