const MyMath = require('./MyMath');

/*
HOW require() works:

1. Resolve - розв'язування

    1) Core modules
    2) node_modules/
    3) local (in your project folder)
        3.1. Directory
                index.js | index.json
        3.2 Filename
                name.js | name.json

    4) throw new Error


2. Loading - завантаження
3. Wrappening - огортання
4. Evaluation - виконання
5. Caching - кешування (запам'ятовування)


*/