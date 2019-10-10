import {CommandModule} from 'yargs';
import Sync, {SyncArguments} from '@gitsync/sync';

let command: CommandModule = {
  handler: () => {
  }
};

command.command = 'sync <target> <source-dir> [target-dir]';

command.describe = '将当前仓库子目录的提交记录同步到另一个仓库';

command.builder = {
  target: {
    describe: '要同步过去的目标仓库目录',
  },
  'source-dir': {
    describe: '当前仓库中，要同步的目录',
  },
  'target-dir': {
    describe: '目标仓库中,要同步的目录',
    default: '.'
  },
  'include-branches': {
    describe: 'Include only branch with names matching the given glob',
    default: [],
    type: 'array',
  },
  'exclude-branches': {
    describe: 'Exclude branch with names matching the given glob',
    default: [],
    type: 'array',
  },
  'include-tags': {
    describe: 'Include only tag with names matching the given glob',
    default: [],
    type: 'array',
  },
  'exclude-tags': {
    describe: 'Exclude tag with names matching the given glob',
    default: [],
    type: 'array',
  },
  'add-tag-prefix': {
    describe: 'Add prefix to tag names before syncing',
    default: '',
    type: 'string',
  },
  'remove-tag-prefix': {
    describe: 'Restrict tag names with the specified prefix to sync and remove the prefix before syncing',
    default: '',
    type: 'string',
  },
  'filter-tags': {
    describe: 'Limit tags with names matching the given glob',
    type: 'array',
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
  yes: {
    describe: 'Whether to skip confirm or not',
    alias: 'y',
    type: 'boolean',
  }
};

command.handler = (argv: SyncArguments) => {
  const sync = new Sync();
  return sync.sync(argv);
};

export default command;
