import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'rui',
  mode: 'site',
  // more config: https://d.umijs.org/config

  hash: true,
  logo: 'https://s1.ax1x.com/2020/05/15/YrME1U.jpg',
  favicon: 'https://s1.ax1x.com/2020/05/15/YrME1U.th.jpg',
  navs: [null, { title: 'GitHub', path: 'https://github.com/git-lt/rui' }],
  extraBabelPlugins: [
    [
      'import',
      {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: 'css',
      },
    ],
  ],
  // scripts: ['https://v1.cnzz.com/z_stat.php?id=1278653578&web_id=1278653578'],
  // styles: ['a[title=站长统计] { display: none; }'],
  exportStatic: {},
});
