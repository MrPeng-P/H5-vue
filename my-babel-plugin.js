module.exports = function ({ types: t }) {
    return {
      visitor: {
        FunctionDeclaration(path) {
          if (path.node.id.name === 'goHome') {
            // 在 goHome 函数内部插入判断逻辑
            path.get('body').unshiftContainer('body', {
              type: 'IfStatement',
              test: t.booleanLiteral(true), // 替换为你的判断条件
              consequent: t.blockStatement([
                t.expressionStatement(t.stringLiteral('Modified goHome function!'))
              ]),
              alternate: null,
            });
          }
        },
      },
    };
  };
  