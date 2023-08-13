import { askUserQuestions } from './inquirer'

const svg = require('svg-builder')
            .width(300)
            .height(200);

export function generateLogo(answers){
    const logo = svg.

    if (answers.userShape==='Circle') {


    } 

    else if (answers.userShape==='Triangle'){


    } 

    else if (answers.userInput==='Square'){


    }

    else {
        console.log('An input occurred with the shape selection, please try again')
        return askUserQuestions()
    }
}
//make sure to account for inavlid color inputs