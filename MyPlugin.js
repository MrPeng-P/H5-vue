// // MyPlugin.js
// module.exports = function (babel) {
//     console.log('%c ..........babel.........','color:#31ef0e',babel)
//     const { types: t } = babel;
  
//     return {
//       visitor: {
//         CallExpression(path) {
//           if (
//             t.isMemberExpression(path.node.callee) &&
//             t.isIdentifier(path.node.callee.object, { name: 'console' }) &&
//             t.isIdentifier(path.node.callee.property, { name: 'log' })
//           ) {
//             // 在 console.log 调用前插入判断逻辑
//             path.insertBefore(
//               t.ifStatement(
//                 t.booleanLiteral(true), // 替换为你的判断条件
//                 t.blockStatement([path.node])
//               )
//             );
//           }
//         },
//       },
//     };
//   };
  // MyBabelPlugin.js
// MyBabelPlugin.js
// MyBabelPlugin.js
const { types: t } = require('@babel/core');

module.exports = function (babel) {
    const { types: t } = babel;

    return {
        visitor: {
            CallExpression(path) {
                // console.log('%c .......... t.isIdentifier(path.node.callee, { name: ........','color:#31ef0e', path.node.callee.property &&
                // path.node.callee.property.name === 'goHome')
                console.log('%c ..........t.isIdentifier(path.node.key, { nam........','color:#31ef0e',t.isIdentifier(path.node.key, { name: 'goHome' }))
                if (
                    path.node.callee.property &&
                    path.node.callee.property.name === 'goHome'
                ) {
                    if (t.isIdentifier(path.node.id, { name: 'goHome' })) {
                        const insertCode = t.expressionStatement(
                            t.callExpression(
                                t.memberExpression(
                                    t.identifier('console'),
                                    t.identifier('log')
                                ),
                                [t.stringLiteral('Calling allMethods.goHome')]
                            )
                        );
    
                        path.node.body.unshift(insertCode);
                    }
                }
            },
        },
    };
};
