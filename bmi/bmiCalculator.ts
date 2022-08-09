interface BMIInput {
  mass: number;
  height: number;
}

const parseBMIArgs = (args: Array<string>): BMIInput => {
  if (args.length < 4) throw new Error('Not enough arguments');
  if (args.length > 4) throw new Error('Too many arguments');

  if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
    return {
      mass: Number(args[2]),
      height: Number(args[3])
    }
  } else {
    throw new Error('Provided values were not numbers!');
  }
}

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
  const { mass, height } = parseBMIArgs(process.argv);
  calculateBmi(mass, height);
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}