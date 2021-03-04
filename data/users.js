import bcrypt from 'bcryptjs';

const users = [
    {
        username: 'emad',
        email:'emad@emad.com',
        password: bcrypt.hashSync('123321', 10),
        isAdmin: true
    },

    {
        username: 'maya',
        email:'maya@maya.com',
        password: bcrypt.hashSync('123321', 10),
        
    },

    {
        username: 'sara',
        email:'sara@sara.com',
        password: bcrypt.hashSync('123321', 10),
        
    },

    {
        username: 'hani',
        email:'hani@hani.com',
        password: bcrypt.hashSync('123321', 10),
        
    },
]


export default users;