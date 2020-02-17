import { Command, flags } from '@oclif/command';
export default class Inquirer extends Command {
    static flags: {
        stage: flags.IOptionFlag<string | undefined>;
    };
    run(): Promise<void>;
}
