


const calculateBmi = (mass: number, height: number) => {
  
  const bmi = mass / (height/100 * height/100);

  if (bmi < 18.5) {
    console.log( 'Underweight');
  } else if (bmi < 25) {
    console.log('Normal (healthy weight)');
  } else if (bmi < 30) {
    console.log('Overweight');
  } else {
    console.log('Obese');
  }
  
}


try {
  calculateBmi(74, 180);
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}


// try {
//   const { value1, value2 } = parseArguments(process.argv);
//   calculateBmi(value1, value2, `Multiplied ${value1} and ${value2}, the result is:`);
// } catch (error: unknown) {
//   let errorMessage = 'Something bad happened.';
//   if (error instanceof Error) {
//     errorMessage += ' Error: ' + error.message;
//   }
//   console.log(errorMessage);
// }