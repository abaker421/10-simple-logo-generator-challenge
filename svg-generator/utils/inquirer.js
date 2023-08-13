import inquirer from 'inquirer'

export const askUserQuestions = inquirer.prompt([
    {
        name: 'userText',
        message: 'Write up to 3 characters to use for your logo',
        type: 'text'
    },
    
    {
        name: 'userShape',
        message: 'Choose a shape to use',
        type: 'list'
    },
    {
        name: 'userColor',
        message: 'Type in a color or HEX color code you want to use',
        type: 'input'
    }
])
.then((answers) => {
    if (answers.userText.length>3) {
        console.log('You can only have three characters')
        return askUserQuestions
    }
})



