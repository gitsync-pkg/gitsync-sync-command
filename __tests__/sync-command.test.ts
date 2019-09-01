import * as fs from 'fs';
import {createRepo, removeRepos, runCommand} from '@gitsync/test';
import sync from '..';

afterAll(() => {
  removeRepos();
});

// For more tests, please see @gitsync/sync
describe('sync command', () => {
  test('run sync', async () => {
    const source = await createRepo();
    await source.commitFile('test.txt');

    const target = await createRepo();

    await runCommand(sync, source, {
      target: target.dir,
      sourcePath: '.',
    });

    expect(fs.existsSync(target.getFile('test.txt'))).toBe(true);
  });
});


