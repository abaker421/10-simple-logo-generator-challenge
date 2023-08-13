import { askUserQuestions } from "./utils/inquirer"
import { generateLogo } from "./utils/svg-builder"

askUserQuestions()

generateLogo(answers)