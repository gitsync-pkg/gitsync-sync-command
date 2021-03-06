import * as fs from 'fs';
import {createRepo, runCommand} from '@gitsync/test';
import sync from '..';

// For more tests, please see @gitsync/sync
describe('sync command', () => {
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


