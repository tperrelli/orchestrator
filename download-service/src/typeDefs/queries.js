const { gql } = require('apollo-server');
const { readFileSync } = require('fs');

const queries = gql(
    readFileSync(
        __dirname + '/download.queries.graphql',
        'utf8'
    ),
);
    
module.exports = queries;