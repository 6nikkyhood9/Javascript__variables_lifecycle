/* EXECUTION PHASE
Line 1: 
Global scope variable "a" becomes assigned.
Value of the "a" is 2.

Line 2:
Value of const b = 5. - initialized and assigned;

Line 4:
const sum. - initialized and assigned;
Result of sum is:
const sum = function(a, b) {
    var a & b - decleared, initialized with 'undefined';
  return a + b;
};

Line 8:
b & a is already assigned and has value 5 and 2;

(b > a) - true;
{
    Line 9:
    Block scope let variables 'multResult' becomes initialized and assigned.

Safe to call mult function (assigned in the global scope). a & b are assigned and have values 2 and 5.
mult(2,5);

}

Line 18: (mult func execution){
    a = 2; assigned
    b = 5; assigned

    Line 21:
    var result decleared and initialized with undefined;

    Line 19:

    2 * 5 -> result becomes assigned and get value 10

    Line 20:

    10 is returned;
}

Block scope of ifElse:{
    let variable multResult becomes initialized and assigned/
    multResult value is 10;
}

Line 10:
Global Scope{
    var finalResult = 10; decleared, initialized and assigned;

    Line 24:
    finalResult ia found in the global scope and it`s value is 10

    console.log(finalResult) -> 10 is printed;
}
*/
