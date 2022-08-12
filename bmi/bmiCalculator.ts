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
  if (isNaN(bmi)) throw new Error('malformatted parameters');

  if (bmi < 18.5) {
    return {
      weight: mass,
      height: height,
      bmi: `Underweight`,
    }
  } else if (bmi < 25) {
    return {
      weight: mass,
      height: height,
      bmi: `Normal (healthy weight)`,
    }
  } else if (bmi < 30) {
    return {
      weight: mass,
      height: height,
      bmi: `Overweight`,
    }
  } else {
    return {
      weight: mass,
      height: height,
      bmi: `Obese`,
    }
  }
}

try {
  const { mass, height } = parseBMIArgs(process.argv);
  console.log(calculateBmi(mass, height));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}

export default calculateBmi;