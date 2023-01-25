import * as React from 'react';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import MyList from './MyList';

const toDos = ['Buy ice cream', 'Eat ice cream', 'Go to the gym'];

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <MyList theList={toDos} />
  </StrictMode>
);
