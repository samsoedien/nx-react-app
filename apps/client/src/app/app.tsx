import React from 'react';
import styled from 'styled-components';

import { SharedUiComponent } from '@nx-react-app/shared/ui-component';

import { ReactComponent as Logo } from './logo.svg';

export function App() {
  return (
    <>
      <header>
        <h1>Welcome to client!</h1>
      </header>
      <main>
        <SharedUiComponent />
      </main>
    </>
  );
}

export default App;
