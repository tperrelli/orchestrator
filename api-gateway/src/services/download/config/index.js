require('dotenv-safe').config();

const dev = 'http://127.0.0.1:3001';
const prod = 'https://api.downloads.com';

const config = {
    baseUrl: () => {
        return process.env.ENV === 'dev' ? dev : prod;
    }
};

module.exports = config;