import {CommandModule} from 'yargs';
import Sync, {SyncArguments} from '@gitsync/sync';

let command: CommandModule = {
  handler: () => {
  }
};

command.command = 'sync <target> <source-path> [target-path]';

command.describe = '将当前仓库子目录的提交记录同步到另一个仓库';

command.builder = {
  target: {
    describe: '要同步过去的目标仓库目录',
  },
  'source-path': {
    describe: '当前仓库中，要同步的目录',
  },
  'target-path': {
    describe: '目标仓库中,要同步的目录',
    default: '.'
  },
  branches: {
    describe: '要同步的分支,默认为全部，多个使用空格隔开',
    default: '*',
  },
  'no-tags': {
    describe: '是否同步标签',
    default: false,
    type: 'boolean',
  },
  'preserve-commit': {
    describe: '是否保留提交者和提交时间',
    default: true,
    type: 'boolean',
  },
  'max-count': {
    describe: 'Limit the number of commits to compare for syncing',
    type: 'number',
  },
  after: {
    describe: '同步指定日期之后的记录',
    type: 'string',
  },
};

command.handler = (argv: SyncArguments) => {
  const sync = new Sync();
  return sync.sync(argv);
};

export default command;
