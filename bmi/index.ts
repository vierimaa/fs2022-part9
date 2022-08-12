import express from 'express';
import calculateBmi from './bmiCalculator';

const app = express();

app.get('/hello', (req, res) => {
  const { weight, height } = req.query;
  try {
    const result = calculateBmi(Number(weight), Number(height));
    res.send(result);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
});

const PORT = 3003;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});