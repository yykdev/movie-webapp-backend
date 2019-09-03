import { getPeoples, getById } from "./db";

const resolvers = {
    Query: {
        people: () => getPeoples(),
        person: (_, { id }) => getById(id)
    }
};

export default resolvers;
