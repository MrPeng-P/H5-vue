// modify-vue-loader.js

const compiler = require('vue-template-compiler');
const loaderUtils = require('loader-utils');

module.exports = function (source) {
    console.log('%c ..........SU==.........','color:#31ef0e',source)
  const options = loaderUtils.getOptions(this);

  const parsedComponent = compiler.parseComponent(source);
    console.log('%c ...................','color:#31ef0e',parsedComponent)
  if (parsedComponent.script) {
    console.log(11);
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
