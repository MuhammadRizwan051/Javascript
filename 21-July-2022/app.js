
// calculator


var num1 = parseInt(prompt("First Value"))
var operator = prompt("Enter any operator", "+,-,*,/");
var num2 = parseInt(prompt("Second Value"));
var calc;


if (operator == "+") {
    calc = (num1 + num2);
    document.write(num1 + " " + operator + " " + num2 + " = " + calc)
}
else if (operator == "-") {
    calc = num1 - num2;
    document.write(num1 + " " + operator + " " + num2 + " = " + calc)
}
else if (operator == "*") {
    calc = num1 * num2;
    document.write(num1 + " " + operator + " " + num2 + " = " + calc)
}
else if (operator == "/") {
    calc = num1 / num2;
    document.write(num1 + " " + operator + " " + num2 + " = " + calc)
}
else {
    document.write("Incorrect Operator")
}