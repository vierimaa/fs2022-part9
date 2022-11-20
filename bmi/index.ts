import express from 'express';
import calculateBmi from './bmiCalculator';
import  { calculateExcercise } from './excerciseCalculator';

const app = express();

app.use(express.json());

app.get('/', (_req, res) => {
  res.send('hello root');
});

app.get('/bmi', (req, res) => {
  const { weight, height } = req.query;
  try {
    const result = calculateBmi(Number(weight), Number(height));
    res.send(result);
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access, @typescript-eslint/no-unsafe-assignment
    res.status(400).send({ error: error.message });
  }
});

app.post('/excercises', (req, res) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const { target, dailyExcerciseHours } = req.body;
  console.log(req.body);

  if (!(target && dailyExcerciseHours)) {
    res.status(400).send({ error: 'parameters missing' });
  }

  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    res.send(calculateExcercise(target, dailyExcerciseHours));
  } catch (_) {
    res.status(400).send({ error: 'malformatted parameters' });
  }

});

const PORT = 3003;

app.listen(PORT, '127.0.0.1', () => {
  console.log(`Server running on port ${PORT}`);
});