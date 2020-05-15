import React from 'react';
import { Radio } from 'antd';
import { RadioGroupProps } from 'antd/es/radio';

const { Group } = Radio;

export interface XRadioGroupProps extends RadioGroupProps {
  data: Record<string, any>[];
  keyName?: string;
  valueName?: string;
  hasAll?: boolean;
}

class XRadioGroup extends React.Component<XRadioGroupProps> {
  render() {
    const {
      data,
      hasAll,
      valueName = 'name',
      keyName = 'id',
      value,
      onChange,
      ...others
    } = this.props;
    const list = data.slice();
    if (hasAll && list[0][valueName] !== '全部') {
      list.unshift({ [keyName]: '', [valueName]: '全部' });
    }
    let options: any = { ...others };
    if (value) options.value = value;
    if (onChange) options.onChange = onChange;

    return (
      <Group {...options}>
        {list.map((v, i) => (
          <Radio value={v.id} key={i}>
            {v.name}
          </Radio>
        ))}
      </Group>
    );
  }
}

export default XRadioGroup;
