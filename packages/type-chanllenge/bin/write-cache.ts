import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const dirs: string[] = ['easy', 'medium'];
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
const cachePath = path.resolve(dirname, '../', '.cache');
// 获取所有文件夹名
for (const dir of dirs) {
  const dirnames: string[] = fs.readdirSync(path.resolve(dirname, '../', dir));
  fs.appendFileSync(cachePath, dirnames.join(';'));
}
