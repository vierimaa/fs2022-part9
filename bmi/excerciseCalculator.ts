interface ExcerciseInputs {
  targetHours: number;
  dailyExcerciseHours: Array<number>;
}

const parseExcerciseArgs = (args: Array<string>): ExcerciseInputs => {
  const myArgs = args.slice(2);
  const [targetHours, ...dailyExcerciseHours] = myArgs;

  if (myArgs.length < 1) {
    throw new Error('Not enough arguments');
  }

  if (myArgs.length > 1 && myArgs.some(arg => isNaN(Number(arg)))) {
    throw new Error('Provided values were not numbers!');

  } 
  
  return {
    targetHours: Number(targetHours),
    dailyExcerciseHours: dailyExcerciseHours.map(hours => Number(hours))
  } 
}

interface ExcerciseResults {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExcercise = (setTarget: number, dailyExcerciseHours: Array<number>): ExcerciseResults => {
    const periodLength = dailyExcerciseHours.length;
    const trainingDays = dailyExcerciseHours.filter(hours => hours > 0).length;
  
    const target = setTarget;
    const average = dailyExcerciseHours.reduce((a, b) => a + b, 0) / dailyExcerciseHours.length;
    let success;
    let rating;
    let ratingDescription;

    if (average >= target && average > 0) {
      success = true;
      rating = 3;
      ratingDescription = 'You did great!';
    } else if (average < target && average > 0) {
      success = false;
      rating = 2;
      ratingDescription = 'You did ok.';
    } else {
      success = false;
      rating = 1;
      ratingDescription = 'You did not do anything.';
    }

  return {
    periodLength,
    trainingDays,
    success,
    rating,
    ratingDescription,
    target,
    average
  }
}

try {
  const {targetHours, ...dailyExcerciseHours} = parseExcerciseArgs(process.argv);
  console.log(calculateExcercise(targetHours, dailyExcerciseHours.dailyExcerciseHours));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}