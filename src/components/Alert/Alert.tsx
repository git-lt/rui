import React, { FC } from 'react';
import { Button } from 'antd';

export interface AlertProps {
  message: string;
  type: 'error' | 'info';
}

const Alert: FC<AlertProps> = ({ message, type }) => {
  return (
    <div className="rui-alert">
      <div className={type === 'error' ? 'red' : 'blue'}>{message}</div>
      <Button type="primary">确定</Button>
    </div>
  );
};

export default Alert;
