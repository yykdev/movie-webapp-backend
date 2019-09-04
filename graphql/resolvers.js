import { getMovies } from "./db";

const resolvers = {
    Query: {
        movies: (_, { litmit, rating }) => getMovies(litmit, rating)
    }
};

export default resolvers;
