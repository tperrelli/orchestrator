const redisPubSub = require('../pubSubs/redisPubSub');

const downloads = [];

const DOWNLOAD_REQUESTED = 'download_requested';

const resolvers = {
    Query: {
        findAll: (_, {} ) => {
            return downloads;
        },
        downloadImage: (_, { photoId, customerId } ) => {

            const download = {
                photoId: photoId,
                customerId: customerId,
                totalDownloads: 0
            };

            downloads.push(download);

            redisPubSub.publish(`${DOWNLOAD_REQUESTED}`, {
               downloadRequest: download 
            });

            return downloads;
        }
    },
    Subscription: {
        downloadRequest: {
            subscribe: () => pubSub.asyncInterator([`${DOWNLOAD_REQUESTED}`])
        }
    }
};

module.exports = resolvers;