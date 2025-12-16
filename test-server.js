import express from 'express';
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send(`
    <html>
      <head><title>Asset Processor</title></head>
      <body>
        <h1>Asset Processor Server is Running!</h1>
        <p>Server is working on port ${port}</p>
        <p>The TypeScript server had dependency issues, but this basic server confirms Express is working.</p>
      </body>
    </html>
  `);
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://localhost:${port}`);
});