const createPet = {
    id: 4,
    category: {
        id: 0,
        name: "string"
    },
    name: "cat",
    photoUrls: ["string"],
    tags: [
        {
            id: 0,
            name: "string"
        }
    ],
    status: "available"
};

const updatePet = {
    id: 4,
    category: {
        id: 0,
        name: "kitty"
    },
    name: "cat",
    photoUrls: ["string"],
    tags: [
        {
            id: 0,
            name: "kitty"
        }
    ],
    status: "available"
};

const Headers = {"Content-Type" : "application/json"}

module.exports = {
    createPet,
    updatePet,
    Headers
};