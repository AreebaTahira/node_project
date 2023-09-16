import inquirer from "inquirer";

const answer = await inquirer.prompt([
    {
        type: 'number',
        name: 'num1',
        message:'Enter the first number:'

    },
    {
        type: 'number',
        name: 'num2',
        message:'Enter the second number:'

    },
    {
        type: 'list',
        name: 'operator',
        message:'select the operator you want to perform:',
        choices: ['Add', 'Subtract' , 'Multiply', 'Divide']

    }
]);
let result: number;

switch(answer.operator){
    case 'Add':
        result = answer.num1 + answer.num2;
        console.log("The answer of the condition is: " + result);
        break;
    case 'Subtract':
        result = answer.num1 - answer.num2;
        console.log("The answer of the subtraction is: " + result);
        break;
    case 'Multiply':
        result = answer.num1 * answer.num2;
        console.log("The answer of the muliplication is: " + result);
        break;
    case 'Divide':
        result = answer.num1 / answer.num2;
        console.log("The answer of the division is: " + result);
        break;
}
