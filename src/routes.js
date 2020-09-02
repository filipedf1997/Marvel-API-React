import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

import Sobre from "./Sobre/Sobre"
import Principal from './Principal/Principal'

function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Principal} />
                <Route path="/:id" component={Sobre} />
            </Switch>        
        </BrowserRouter>
    );
};

export default Routes;