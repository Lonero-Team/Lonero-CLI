"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
const inquirer = require("inquirer");
class Inquirer extends command_1.Command {
    async run() {
        const { flags } = this.parse(Inquirer);
        let stage = flags.stage;
        if (!stage) {
            let responses = await inquirer.prompt([{
                    name: 'stage',
                    message: 'select a stage',
                    type: 'list',
                    choices: [{ name: 'development' }, { name: 'staging' }, { name: 'production' }],
                }]);
            stage = responses.stage;
        }
        this.log(`the stage is: ${stage}`);
    }
}
exports.default = Inquirer;
Inquirer.flags = {
    stage: command_1.flags.string({ options: ['development', 'staging', 'production'] })
};
