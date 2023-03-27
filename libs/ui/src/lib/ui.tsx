import { ReactNode } from 'react';

export interface UiProps {
  children?: ReactNode;
}

export function Ui(props: UiProps) {
  return (
    <div>
      <h1>Welcome to Ui!</h1>
      {props.children}
    </div>
  );
}

export default Ui;
