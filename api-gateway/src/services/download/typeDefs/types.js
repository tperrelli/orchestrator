const { gql } = require('apollo-server');

const types = gql`
    type Download {
        photoId: String
        customerId: String
        totalDownloads: Int
    }
`;

module.exports = types;