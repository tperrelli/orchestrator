const { gql } = require('apollo-server');
const { readFileSync } = require('fs');

const types = gql(
    readFileSync(
        __dirname + '/download.graphql',
        'utf8'
    ),
);
    
module.exports = types;