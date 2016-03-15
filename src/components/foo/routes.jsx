import React from 'react';
import { Route } from 'react-router';

import Sidebar from '../Sidebar';
import Layout from '../Layout';

import style from './foo.scss';

const Foo1 = () => (<div className={style.item}>Foo1</div>);
const Foo2 = () => (<div className={style.item}>Foo2</div>);
export default (
    <Route path="/foo" component={Layout}>
        <Route path="1" components={{ sidebar: Sidebar, content: Foo1 }} />
        <Route path="2" components={{ sidebar: Sidebar, content: Foo2 }} />
    </Route>
);
