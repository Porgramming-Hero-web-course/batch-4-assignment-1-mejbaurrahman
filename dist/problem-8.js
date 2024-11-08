"use strict";
{
    const validateKeys = (obj, keys) => {
        keys.forEach((key) => {
            if (obj[key] !== undefined) {
                return false;
            }
        });
        return true;
    };
    //   // Sample Input:
    //   const person = { name: "Alice", age: 25, email: "alice@example.com" };
    //   console.log(validateKeys(person, ["name", "age"]));
    //   // Sample Output:
    //   true;
}
