#! usr/bin/env node

import process from "process";
import path from "path";
import fs, { writeFile } from "fs";

const BASE_PRO_PATH = "D:/chenlu/github/type-chanllenge";
const BASE_CACHE_PATH = "../.cache";
// 获取配置项
enum Classify {
  easy = 1,
  middle,
  hard,
}
const classify: string = Object.keys(Classify).includes(process.argv[2])
  ? process.argv[2]
  : "easy";

// 获取文件夹路径
let dirPath: string;
if (isNaN(Number(classify))) {
  dirPath = path.resolve(__dirname, "../", classify);
} else {
  dirPath = path.resolve(__dirname, "../", Classify[Number(classify)]);
}

if (fs.existsSync(dirPath)) {
  const newDir: number = Date.now(); // 临时文件名
  // 创建文件夹
  fs.mkdirSync(path.resolve(dirPath, newDir.toString()));
  // 写入文件
  const loop = () => {};
  fs.writeFile(
    path.resolve(dirPath, newDir.toString(), "template.ts"),
    "",
    loop
  );
  fs.writeFile(
    path.resolve(dirPath, newDir.toString(), "test-cases.ts"),
    "",
    loop
  );
  fs.writeFile(path.resolve(dirPath, newDir.toString(), "README.md"), "", loop);
}
