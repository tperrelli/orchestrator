const { RedisPubSub } = require('graphql-redis-subscriptions');
const Redis = require('ioredis');
require('dotenv-safe').config();

const options = {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
    retryStrategy: times => {
      return Math.min(times * 50, 2000);
    }
};

const redisPubSub = new RedisPubSub({
    publisher: new Redis(options),
    subscriber: new Redis(options),
});

module.exports = redisPubSub;