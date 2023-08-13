import { askUserQuestions } from './inquirer'

const {userShape, userText, userColor } = answers

export function generateLogo(answers){
    if (userShape==='Circle') {


    } 

    else if (userShape==='Triangle'){


    } 

    else if (userShape==='Square'){


    }

    else {
        console.log('An input occurred with the shape selection, please try again')
        return askUserQuestions()
    }
}
//make sure to account for inavlid color inputs, add an || 