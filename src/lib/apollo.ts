import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
    uri: 'https://api-sa-east-1.graphcms.com/v2/cl4osflld0yhd01xs1j8dgf7g/master',
    cache: new InMemoryCache()
})