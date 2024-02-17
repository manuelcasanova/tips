const allowedOrigins = require('./allowedOrigins'); // Ensure correct path

const corsOptions = {
  origin: (origin, callback) => {
    console.log('Incoming Origin:', origin); // Log the incoming origin
    if (allowedOrigins.includes(origin) || !origin) {
      console.log('Allowed by CORS');
      callback(null, true);
    } else {
      console.log('Not allowed by CORS');
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  allowedHeaders: ['Content-Type', 'Authorization'], // 'Access-Control-Allow-Origin' is a response header
  preflightContinue: false, // Disable preflight caching
  optionsSuccessStatus: 204, // No content for OPTIONS request
};

module.exports = corsOptions;