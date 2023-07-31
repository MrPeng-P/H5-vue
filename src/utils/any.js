// 生成随机的垃圾代码
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
    const numLines = Math.floor(Math.random() * 100) + 150; // 生成 50-150 行代码
  
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
        junkCode += `for (int ${variable} = 0; ${variable} < 10; ${variable}++) {\n  // do something\n}\n`;
      }
    }
  
    return junkCode;
  }
    // 输出生成的垃圾代码
    console.log(generateJunkCode());

  function generateJunkCode2(lines) {
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
    for (let i = 0; i < lines; i++) {
      const lineType = Math.random();
      if (lineType < 0.5) {
        // 生成变量赋值语句
        const variable = randomVariable();
        const value = Math.floor(Math.random() * 100);
        junkCode += `${variable} = ${value};\n`;
      } else if (lineType < 0.8) {
        // 生成逻辑条件语句
        const variable1 = randomVariable();
        const variable2 = randomVariable();
        const operator = randomOperator();
        junkCode += `if (${variable1} ${operator} ${variable2}) {\n  // 做一些操作\n}\n`;
      } else {
        // 生成循环语句
        const variable = randomVariable();
        junkCode += `for (int ${variable} = 0; ${variable} < 10; ${variable}++) {\n  // 做一些操作\n}\n`;
      }
    }
  
    return junkCode;
  }
  
  // 示例用法：
  const junkCode = generateJunkCode(10); // 生成10行垃圾代码
  console.log(junkCode);
