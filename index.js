const fs = require('fs').promises;

/*
Задача: прочитати вміст текстового файлу і вивести його на консоль

*/

const promise = fs.readFile('./text.txt', 'utf-8')
                    .then(promiseValue => {
                        const fileText = promiseValue + 'We can read and write to files';
                        fs.writeFile('./newFile.txt', fileText);
                    })


                   