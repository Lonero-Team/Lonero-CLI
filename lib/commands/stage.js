"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class Stage extends command_1.Command {
    async run() {
        const { args, flags } = this.parse(Stage);
        const name = flags.name || 'world';
        this.log(`hello ${name} from /home/gamer456148/lonero-cli/src/commands/stage.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
exports.default = Stage;
Stage.description = 'describe the command here';
Stage.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
Stage.args = [{ name: 'file' }];
