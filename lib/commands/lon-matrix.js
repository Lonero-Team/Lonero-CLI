"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const command_1 = require("@oclif/command");
class LonMatrix extends command_1.Command {
    async run() {
        const { args, flags } = this.parse(LonMatrix);
        const name = flags.name || 'world';
        this.log(`hello ${name} from /home/gamer456148/lonero-cli/src/commands/lon-matrix.ts`);
        if (args.file && flags.force) {
            this.log(`you input --force and --file: ${args.file}`);
        }
    }
}
exports.default = LonMatrix;
LonMatrix.description = 'describe the command here';
LonMatrix.flags = {
    help: command_1.flags.help({ char: 'h' }),
    // flag with a value (-n, --name=VALUE)
    name: command_1.flags.string({ char: 'n', description: 'name to print' }),
    // flag with no value (-f, --force)
    force: command_1.flags.boolean({ char: 'f' }),
};
LonMatrix.args = [{ name: 'file' }];
