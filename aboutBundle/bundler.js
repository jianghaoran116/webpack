const fs = require('fs');
const path = require('path');
const parser = require('@babel/parser');
const traverse = require('@babel/traverse').default;
const babel = require('@babel/core');

const moduleAnalyser = (filename) => {
  const content = fs.readFileSync(filename, 'utf-8');
  const ast = parser.parse(content, {
    sourceType: 'module'
  });
  const dependancise = {};
  traverse(ast, {
    ImportDeclaration({node}) {
      const dirname = path.dirname(filename)
      const newFilename = './'+path.join(dirname, node.source.value)
      dependancise[node.source.value] = newFilename;
    }
  })
  const { code } = babel.transformFromAst(ast, null, {
    'presets': ['@babel/preset-env']
  })
  console.log(code)
  return {
    filename,
    dependancise,
    code
  }
} 

moduleAnalyser('./src/index.js')