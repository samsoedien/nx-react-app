import React from 'react';

import './shared-ui-component.module.scss';

/* eslint-disable-next-line */
export interface SharedUiComponentProps {}

export function SharedUiComponent(props: SharedUiComponentProps) {
  return (
    <div>
      <h1>Welcome to shared-ui-component!</h1>
    </div>
  );
}

export default SharedUiComponent;
