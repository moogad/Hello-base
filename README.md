# Hello Base

A simple Node.js application ready for deployment.

## Getting Started

### Prerequisites
- Node.js 18.x or higher

### Installation

```bash
npm install
```

### Running Locally

```bash
npm start
```

The application will be available at `http://localhost:3000`

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy on every push to `main`

Alternatively, use the CLI:

```bash
npm install -g vercel
vercel
```

### Deploy to Other Platforms

- **Heroku**: `git push heroku main`
- **Railway**: Connect your GitHub repo
- **Render**: Connect your GitHub repo
- **AWS**: Use AWS Elastic Beanstalk or Lambda

## Project Structure

```
.
├── server.js          # Main application file
├── package.json       # Project dependencies
├── vercel.json        # Vercel deployment config
└── README.md          # This file
```

## License

MIT
