// .fatherrc.js
const options = {
  entry: 'src/index.tsx',
  // es6 版本，支持 import 与 TreeShaking
  esm: 'babel',
  // commonjs 版本，支持 require
  cjs: 'babel',
  umd: {
    name: 'rui',
    sourcemap: true,
    globals: {
      react: 'React',
      antd: 'antd',
    },
  },
  doc: {
    title: 'rui',
    themeConfig: { mode: 'light' },
    base: '/rui',
    menu: [],
  },
  extraBabelPlugins: [
    [
      'babel-plugin-import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
      },
    ],
  ],
  // 是否提取 css 为单独文件
  extractCSS: true,
  // 在 babel 模式下做 less 编译
  lessInBabelMode: true,
  // 是否把 helper 方法提取到 @babel/runtime 里
  runtimeHelpers: true,
};

export default options;
