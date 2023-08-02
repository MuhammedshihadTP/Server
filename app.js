const express = require('express');
const fs = require('fs');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello, World!');
});


function sumArray(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
  }
 
  app.get('/sum', (req, res) => {
    const numbers = [1, 2, 3, 4, 5];
    const result = sumArray(numbers);
    res.send(`Sum of numbers: ${result}`);
  });

  function countWordsInFile(filename, callback) {
    fs.readFile(filename, 'utf8', (err, data) => {
      if (err) {
        callback(err, null);
      } else {
        const words = data.split(/\s+/).filter(word => word !== '');
        callback(null, words.length);
      }
    });
  }
  
  
  app.get('/wordcount', (req, res) => {
    const filename = './data.txt';
    countWordsInFile(filename, (err, count) => {
      if (err) {
        res.status(500).send('Error reading the file');
      } else {
        res.send(`Total word count: ${count}`);
      }
    });
  })


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});