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
            name: 'Obi-Wan Kenobi',
            workType: 'Plumber',
            category: categories[0]._id,
            quote: ''
        },
        {
            name: 'Darth Maul',
            workType: 'Plumber',
            category: categories[0]._id,
            quote: ''
        },
        {
            name: 'Darth Sidious',
            workType: 'Yard Work',
            category: categories[1]._id,
            quote: ''
        },
        {
            name: 'Qui-Gon Jinn',
            workType: 'Yard Work',
            category: categories[1]._id,
            quote: ''
        },
        {
            name: 'Sheev Palpatine',
            workType: 'Electrical',
            category: categories[2]._id,
            quote: ''
        },
        {
            name: 'Han Solo',
            workType: 'Electrical',
            category: categories[2]._id,
            quote: ''
        },
        {
            name: 'Lando Calrissian',
            workType: 'Refrigeration',
            category: categories[3]._id,
            quote: ''
        },
        {
            name: 'Poe Dameron',
            workType: 'Refrigeration',
            category: categories[3]._id,
            quote: ''
        },
        {
            name: 'Boba Fett',
            workType: 'Heating/AC',
            category: categories[4]._id,
            quote: ''
        },
        {
            name: 'Kylo Ren',
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