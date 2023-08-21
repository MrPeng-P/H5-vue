// modify-vue-loader.js

const compiler = require('vue-template-compiler');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
  const options = loaderUtils.getOptions(this);

  const parsedComponent = compiler.parseComponent(source);

  if (parsedComponent.script) {
    const scriptContent = parsedComponent.script.content;

    // 在这里执行你的代码修改逻辑
    const modifiedScript = `
      ${scriptContent}
      // 添加或修改的代码
    `;

    parsedComponent.script.content = modifiedScript;
  }

  const modifiedSource = compiler.serializeComponent(parsedComponent);

  return modifiedSource;
};
