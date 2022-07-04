import { ApolloServer } from 'apollo-server';

const typeDefs = require('./typeDefs');
const resolvers = require('./resolvers');

const DownloadAPI = require('./services/download/downloadApi');

const server = new ApolloServer({
    typeDefs,
    resolvers,
    dataSources: () => {
        return {
            downloadApi: new DownloadAPI()
        }
    }
});

const port = 3000;

server.listen({ port: port }).then((response) => {
    console.log(`API Gateway is running at: ${response.url}`);
});