const db = require('./connection');
const { User, Category, Contractor } = require('../models');

db.once('open', async () => {
    await Category.deleteMany();

    const categories = await Category.insertMany([
        { name: 'Plumber'},
        { name: 'Yard Work'},
        { name: 'Electrical' },
        { name: 'Refrigeration'},
        { name: 'Heating/AC'}
    ]);

    console.log('categories seeded');

    await Contractor.deleteMany();

    const contractor = await Contractor.insertMany([
        {
            firstName: 'Obi-Wan',
            lastName: 'Kenobi',
            email: 'obi@testemail.com',
            password: 'password1321564',
            workType: 'Plumber',
            category: categories[0]._id,
            quote: ''
        },
        {
            firstName: 'Darth',
            lastName: 'Maul',
            email: 'darth@testemail.com',
            password: 'password132465',
            workType: 'Plumber',
            category: categories[0]._id,
            quote: ''
        },
        {
            firstName: 'Darth',
            lastName: 'Sidious',
            email: 'sidious@testemai.com',
            password: 'password',
            workType: 'Yard Work',
            category: categories[1]._id,
            quote: ''
        },
        {
            firstName: 'Qui-Gon',
            lastName: 'Jinn',
            email: 'qcj@testemail.com',
            password: 'pass132word',
            workType: 'Yard Work',
            category: categories[1]._id,
            quote: ''
        },
        {
            firstName: 'Sheev',
            lastName: 'Palpatine',
            email: 'emp@testemail.com',
            password: 'password159',
            workType: 'Electrical',
            category: categories[2]._id,
            quote: ''
        },
        {
            firstName: 'Han',
            lastName: 'Solo',
            email: 'solo@testemail.com',
            password: 'password13223',
            workType: 'Electrical',
            category: categories[2]._id,
            quote: ''
        },
        {
            firstName: 'Lando',
            lastName: 'Calrissian',
            email: 'claris@testemail.com',
            password: 'password123156',
            workType: 'Refrigeration',
            category: categories[3]._id,
            quote: ''
        },
        {
            firstName: 'Poe',
            lastName: 'Dameron',
            email: 'poe@testemail.com',
            password: 'password1984',
            workType: 'Refrigeration',
            category: categories[3]._id,
            quote: ''
        },
        {
            firstName: 'Boba',
            lastName: 'Fett',
            email: 'fettman@testemail.com',
            password: 'password135210',
            workType: 'Heating/AC',
            category: categories[4]._id,
            quote: ''
        },
        {
            firstName: 'Kylo',
            lastName: 'Ren',
            email: 'kylo@testemail.com',
            password: 'password13510',
            workType: 'Heating/AC',
            category: categories[4]._id,
            quote: ''
        }
    ]);

    console.log('contractors seeded');

    await User.deleteMany();

    await User.create({
        firstName: 'Luke',
        lastName: 'Skywalker',
        email: 'luke@testemail.com',
        password: 'password123456',
        quotes: [
            {
                contractor: []
            }
        ]
    });

    await User.create({
        firstName: 'Mace',
        lastName: 'Windu',
        email: 'MaceWindu@testemail.com',
        password: 'password12345'
    });

    console.log('users seeded');

    process.exit();
});