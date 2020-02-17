import {Command, flags} from '@oclif/command'
import * as inquirer from 'inquirer'

export default class Inquirer extends Command {
static flags = {
    stage: flags.string({options: ['development', 'staging', 'production']})
  }

  async run() {
    const {flags} = this.parse(Inquirer)
    let stage = flags.stage
    if (!stage) {
      let responses: any = await inquirer.prompt([{
        name: 'stage',
        message: 'select a stage',
        type: 'list',
        choices: [{name: 'development'}, {name: 'staging'}, {name: 'production'}],
      }])
      stage = responses.stage
    }
    this.log(`the stage is: ${stage}`)
  }
}
