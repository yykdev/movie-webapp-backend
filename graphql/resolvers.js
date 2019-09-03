import { getPeoples, getById, addPeople } from "./db";

const resolvers = {
    Query: {
        people: () => getPeoples(),
        person: (_, { id }) => getById(id)
    },
    Mutation: {
        addPeople: (_, { name, age, gender }) => addPeople(name, age, gender)
    }
};

export default resolvers;
