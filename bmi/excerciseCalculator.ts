interface ExcerciseStats {
  periodLength: number;
  trainingDays: number;
  success: boolean;
  rating: number;
  ratingDescription: string;
  target: number;
  average: number;
}

const calculateExcercise = (dailyExcerciseHours: Array<number>): ExcerciseStats => {
    const periodLength = dailyExcerciseHours.length;
    const trainingDays = dailyExcerciseHours.filter(hours => hours > 0).length;
    const success = false;
    const rating = 2;
    const ratingDescription = 'not too bad but could be better';
    const target = 10;
    const average = dailyExcerciseHours.reduce((a, b) => a + b, 0) / dailyExcerciseHours.length;
  
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
  console.log(calculateExcercise([1, 0, 3, 0, 2, 0, 2.5]));
} catch (error: unknown) {
  let errorMessage = 'Something went wrong.'
  if (error instanceof Error) {
    errorMessage += ' Error: ' + error.message;
  }
  console.log(errorMessage);
}