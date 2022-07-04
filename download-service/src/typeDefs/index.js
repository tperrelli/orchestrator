const types = require('./types');
const queries = require('./queries');
const subscriptions = require('./subscriptions');

const typeDefs = [types, queries];

module.exports = typeDefs;