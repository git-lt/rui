---
nav:
  title: 组件
  path: /components
group:
  title: Antd 扩展
  path: /antd-ext
---

## XRadioGroup 单选组

Demo:

```tsx
import React from 'react';
import { XRadioGroup } from '@qiejs/rui';

export default () => (
  <XRadioGroup
    data={[
      { id: 1, name: '苹果' },
      { id: 2, name: '桃子' },
      { id: 3, name: '葡萄' },
    ]}
  />
);
```

## API 文档

| 参数      | 说明         | 类型    | 默认值 |
| --------- | ------------ | ------- | ------ |
| data      | 数据列表     | array   | []     |
| keyName   | key 的名称   | string  | 'id'   |
| valueName | value 的名称 | string  | 'name' |
| hasAll    | 是否显示全部 | boolean | false  |

该配置扩展自 `antd/radio/group` , `Radio.Group` 原有的配置都可以使用
