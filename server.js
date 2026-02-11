const http = require('http');

const hostname = 'localhost';
const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Hello Base</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          }
          .container {
            text-align: center;
            color: white;
          }
          h1 {
            font-size: 3em;
            margin: 0;
          }
          p {
            font-size: 1.5em;
            margin: 10px 0 0 0;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Hello Base</h1>
          <p>Welcome to your deployment!</p>
        </div>
      </body>
    </html>
  `);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
