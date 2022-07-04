const downloadResolvers = {
    Query: {
        downloadImage: (_, { photoId, customerId }, { dataSources } ) => {
            return dataSources.downloadApi.downloadImage(photoId, customerId);
        }
    }
};

module.exports = downloadResolvers;