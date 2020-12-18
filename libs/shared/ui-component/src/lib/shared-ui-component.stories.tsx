import React from 'react';
import {
  SharedUiComponent,
  SharedUiComponentProps,
} from './shared-ui-component';

export default {
  component: SharedUiComponent,
  title: 'SharedUiComponent',
};

export const primary = () => {
  /* eslint-disable-next-line */
  const props: SharedUiComponentProps = {};

  return <SharedUiComponent />;
};
