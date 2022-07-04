const { RESTDataSource } = require('apollo-datasource-rest');

const { baseUrl } = require('./config');

class DownloadAPI extends RESTDataSource {

    constructor() {
        super();
        this.baseURL = baseUrl();
    }

    async downloadImage(photoId, customerId) {
        return this.get(`images/download/${photoId}/${customerId}`);
    }
}

module.exports = DownloadAPI;