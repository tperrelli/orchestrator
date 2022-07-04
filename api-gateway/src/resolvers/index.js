const downloadResolvers = require('../services/download/resolvers');

const resolvers = { Query: {} };

resolvers.Query = { 
    ...downloadResolvers.Query 
};

module.exports = resolvers;