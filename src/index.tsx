import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Layouts from  './layouts/Layouts';
import { BrowserRouter } from 'react-router-dom';
import{ Provider } from 'mobx-react';
import stores from './stores/index';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider {...stores}>
    <BrowserRouter>
        <Layouts />
    </BrowserRouter>
  </Provider> ,
document.getElementById('root'));


serviceWorker.unregister();

