export default {
  esm: 'babel',
  cjs: 'babel',
  umd: {
    name: 'rui',
    sourcemap: false,
    globals: {
      react: 'React',
      antd: 'antd',
    },
  },
  disableTypeCheck: true,
  // 是否提取 css 为单独文件
  extractCSS: true,
  // 在 babel 模式下做 less 编译
  lessInBabelMode: true,
  // 是否把 helper 方法提取到 @babel/runtime 里
  runtimeHelpers: true,
};
