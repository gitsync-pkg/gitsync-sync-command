import * as fs from 'fs';
import {RepoManager, runCommand} from '@gitsync/test';
import sync from '..';

const {createRepo, removeRepos} = new RepoManager();

// For more tests, please see @gitsync/sync
describe('sync command', () => {
  afterAll(async () => {
    await removeRepos();
  });

  test('run sync', async () => {
    const source = await createRepo();
    await source.commitFile('test.txt');

    const target = await createRepo();

    await runCommand(sync, source, {
      target: target.dir,
      sourceDir: '.',
    });

    expect(fs.existsSync(target.getFile('test.txt'))).toBe(true);
  });
});


