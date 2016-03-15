import React from 'react';
import { Route } from 'react-router';

import Sidebar from '../Sidebar';
import Layout from '../Layout';

import style from './bar.scss';

const Bar1 = () => (<div className={style.item}>Bar1</div>);
const Bar2 = () => (<div className={style.item}>Bar2</div>);
export default (
    <Route path="/bar" component={Layout}>
        <Route path="1" components={{ sidebar: Sidebar, content: Bar1 }} />
        <Route path="2" components={{ sidebar: Sidebar, content: Bar2 }} />
    </Route>
);
