#! usr/bin/env node

import process from 'process';
import path from 'path';
import fs from 'fs';
const BASE_PRO_PATH = 'D:/gitHub/type-challenges';
const BASE_CACHE_PATH = path.resolve(path.resolve(), '.cache');
const getQuestions = (): string[] => {
  // 获取题库中的readme
  const readme = fs.readFileSync(
    path.resolve(BASE_PRO_PATH, 'README.md'),
    'utf-8'
  );
  // 获取所有题目
  const challenges = readme.match(
    /<!--challenges-start-->(.|\s)+?<!--challenges-end-->/
  );
  if (challenges !== null) {
    // 获取所有<a>元素
    const challegePaths = challenges[0].match(
      /<a href=(.+?) target="_blank">.+?<\/a>/g
    );
    if (challegePaths !== null) {
      const questions: string[] = challegePaths.reduce(
        (prev: string[], path: string) => {
          const question = path.match(
            /href=".\/questions\/(\d+-.+?)\/README\.md" target/
          );
          if (question !== null) {
            return [...prev, question[1]];
          } else {
            console.log(path);
            return prev;
          }
        },
        []
      );
      return questions;
    }
  }
  return [];
};
function copyFile(dir: string, file: string, outdir: string): void {
  const readStream = fs.createReadStream(
    path.resolve(BASE_PRO_PATH, 'questions', dir, file),
    'utf-8'
  );
  const writeStream = fs.createWriteStream(path.resolve(outdir, file), 'utf-8');
  readStream.pipe(writeStream);
}
// 获取配置项
enum Classify {
  easy = 1,
  medium,
  hard
}
const classify: string = Object.keys(Classify).includes(process.argv[2])
  ? process.argv[2]
  : 'easy';

// 获取文件夹路径
const level = isNaN(Number(classify)) ? classify : Classify[Number(classify)];
const dirPath: string = path.resolve(path.resolve(), level);
if (fs.existsSync(dirPath)) {
  // 获取cache文件
  const cacheReadStream = fs.createReadStream(BASE_CACHE_PATH);
  let cache: string;
  cacheReadStream.on('data', (data: string) => {
    cache += data;
  });
  cacheReadStream.on('end', () => {
    const questions = getQuestions();
    // 获取需要创建的题目
    cache.split(';');
    const questionTitle = questions[cache.split(';').length];
    console.log('========', questionTitle);
    const newDir = path.resolve(dirPath, questionTitle);
    fs.mkdirSync(newDir);
    // 复制template.ts文件
    copyFile(questionTitle, 'template.ts', newDir);
    copyFile(questionTitle, 'test-cases.ts', newDir);
    fs.appendFileSync(BASE_CACHE_PATH, `${questionTitle};`, 'utf-8');
  });
}
