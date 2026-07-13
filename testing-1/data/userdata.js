const replace = require('../api/userApi')

const user = "user1";
const password = "password";

const createUser = {
    id: 0,
    username: user,
    firstName: "melon",
    lastName: "joy",
    email: "joy@gmail.com",
    password,
    phone: "9090909090",
    userStatus: 20
};

const createUserArray = [createUser];

// const updateUser = {
//     id: 0,
//     username: "user",
//     firstName: "johnny",
//     lastName: "joy",
//     email: "joy@gmail.com",
//     password,
//     phone: "9090909090",
//     userStatus: 20
// };

// const updateduser = replace.replaceproperty(createUser,firstName,"robin")


// const createUserdata = JSON.parse(JSON.stringify(createUser));
const updateUser = replace.replaceProperty(createUser,"firstName","johnny")


replace.replaceProperty(
  createUser,
  "firstName",
  "johnny"
);


module.exports = {
    user,
    password,
    createUser,
    createUserArray,
    updateUser
};


