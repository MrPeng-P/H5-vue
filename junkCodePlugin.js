
// 生成随机的垃圾代码
const { sources } = require('webpack');

function generateJunkCode() {
    const keywords = [
      'if', 'else', 'while', 'for', 'switch', 'case', 'break', 'continue',
      'public', 'private', 'protected', 'static', 'final', 'return', 'void',
      'class', 'interface', 'extends', 'implements', 'new', 'this', 'super',
      'true', 'false', 'null', 'int', 'long', 'float', 'double', 'String',
    ];
  
    const operators = ['+', '-', '*', '/', '%', '=', '==', '!=', '>', '<', '>=', '<='];
  
    const variables = ['a', 'b', 'c', 'x', 'y', 'z', 'i', 'j', 'k'];
  
    const randomKeyword = () => keywords[Math.floor(Math.random() * keywords.length)];
    const randomOperator = () => operators[Math.floor(Math.random() * operators.length)];
    const randomVariable = () => variables[Math.floor(Math.random() * variables.length)];
  
    let junkCode = '';
    const numLines = Math.floor(Math.random() * 100) + 50; // 生成 50-150 行代码
  
    for (let i = 0; i < numLines; i++) {
      const lineType = Math.random();
      if (lineType < 0.5) {
        // 生成赋值语句
        const variable = randomVariable();
        const value = Math.floor(Math.random() * 100);
        junkCode += `${variable} = ${value};\n`;
      } else if (lineType < 0.8) {
        // 生成逻辑判断语句
        const variable1 = randomVariable();
        const variable2 = randomVariable();
        const operator = randomOperator();
        junkCode += `if (${variable1} ${operator} ${variable2}) {\n  // do something\n}\n`;
      } else {
        // 生成循环语句
        const variable = randomVariable();
        junkCode += `for (let ${variable} = 0; ${variable} < 10; ${variable}++) {\n  // do something\n}\n`;
      }
    }
  
    return junkCode;
  }
  
  // 生成指定数量的垃圾函数
  function generateJunkFunctions(count) {
    let junkFunctions = '';
    for (let i = 0; i < count; i++) {
      junkFunctions += `function junkFunction${i}() {\n`;
      junkFunctions += generateJunkCode();
      junkFunctions += `}\n\n`;
    }
    return junkFunctions;
  }
  
  // 生成指定数量的垃圾资源
  function generateJunkResources(count) {
    let junkResources = '';
    for (let i = 0; i < count; i++) {
      junkResources += `<div id="junkResource${i}" class="godsend"></div>\n`;
    }
    return junkResources;
  }
  
  // 将垃圾代码和资源插入到应用程序的源代码中
  function JunkCodePluginResources() {
    // 生成垃圾函数和资源
    const junkFunctions = generateJunkFunctions(10);
    const junkResources = generateJunkResources(20);
    return junkFunctions
    // return junkFunctions + '\n' + junkResources;
  }
  

class JunkCodePlugin {
    constructor() {
      // No configuration needed for this plugin
    }
  
 
    apply(compiler) {
        compiler.hooks.compilation.tap('GenerateJunkCodePlugin', (compilation) => {
          compilation.hooks.processAssets.tap(
            {
              name: 'GenerateJunkCodePlugin',
              stage: compilation.constructor.PROCESS_ASSETS_STAGE_ADDITIONAL,
            },
            () => {
              // 生成垃圾代码和资源
              const junkCode = JunkCodePluginResources();
    
              // 将垃圾代码插入到相应的源代码文件中
              for (const filename in compilation.assets) {
                if (filename.endsWith('.js')) {
                  const asset = compilation.assets[filename];
                  const originalSource = asset.source();
                  const updatedSource = junkCode + '\n' + originalSource;
                  compilation.updateAsset(filename, new sources.RawSource(updatedSource));
                }
              }
            }
          );
        });
      }
  }
  

  module.exports = JunkCodePlugin;