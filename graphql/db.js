export let people = [
    {
        id: 1,
        name: "Nouveau",
        age: 30,
        gender: "male"
    },
    {
        id: 2,
        name: "Twice",
        age: 20,
        gender: "female"
    },
    {
        id: 3,
        name: "Rainbow",
        age: 25,
        gender: "female"
    },
    {
        id: 4,
        name: "Lovelyz",
        age: 21,
        gender: "female"
    }
];

export const getPeoples = () => people;

export const getById = id => {
    const filteredPeople = people.filter(person => person.id === id);
    return filteredPeople[0];
};

export const addPeople = (name, age, gender) => {
    const newPeople = {
        id: people.length + 1,
        name,
        age,
        gender
    };

    people.push(newPeople);

    return newPeople;
};
