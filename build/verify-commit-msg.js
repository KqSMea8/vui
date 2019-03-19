const chalk = require('chalk');
const msgPath = process.env.GIT_PARAMS;
const msg = require('fs').readFileSync(msgPath, 'utf-8').trim();
/**
 * feat: 新增
 * fix: bug修复
 * docs: 文档添加
 * style: 样式变动
 * refactor: 重构
 * perf: 优化
 * test: 测试相关
 * build: 构建系统或外部依赖项更改
 * ci：对CI配置文件和脚本的更改
 * chore: 构建过程或辅助工具变动
 * revert: 回退commit
 */
const commitRegex = /^(feat|fix|docs|style|refactor|perf|test|build|ci|chore|revert)(\(.+\))?:.{1,50}$/;
if (!commitRegex.test(msg)) {
  console.error(
    `${chalk.bgRed.white('ERROR')} ${chalk.red(`不合法的提交信息`)}\n\n` +
    chalk.red(`请按照指定的格式提交，例如:\n\n`) +
    `${chalk.green(`feat(button): add type`)}\n` +
    `${chalk.green(`fix(input): handle events on blur`)}\n\n` +
    chalk.red(`你可以使用${chalk.cyan(`npm run commit`)}使用交互方式生成规范的提交信息.\n`)
  )
  process.exit(1);
}