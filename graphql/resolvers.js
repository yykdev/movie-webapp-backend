import { getPeoples, getById, addPeople, deletePeople } from "./db";

const resolvers = {
    Query: {
        people: () => getPeoples(),
        person: (_, { id }) => getById(id)
    },
    Mutation: {
        addPeople: (_, { name, age, gender }) => addPeople(name, age, gender),
        deletePeople: (_, { id }) => deletePeople(id)
    }
};

export default resolvers;
