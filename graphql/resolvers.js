import { getMovies, getMovie, getSuggestions } from "./db";

const resolvers = {
    Query: {
        movies: (_, { litmit, rating }) => getMovies(litmit, rating),
        movie: (_, { id }) => getMovie(id),
        suggestions: (_, { id }) => getSuggestions(id)
    }
};

export default resolvers;
