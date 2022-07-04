const { gql } = require('apollo-server');

const queries = gql`
    type Query {
        downloadImage(photoId: String, customerId: String): Download
    }
`;

module.exports = queries;