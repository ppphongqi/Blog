import React ,{ Suspense ,lazy , Component } from 'react';
import { Route , Switch } from 'react-router-dom';
import routePath from './constants/routePath';
import Loading from './components/common/Loading/Loading';

const CV  = lazy(()=>import('./containers/CV/CV'))
const Home = lazy(()=>import('./containers/Home/Home'));


class Routers extends Component<{},{}>{
    constructor(props:{}){
        super(props);
        this.state = {};
    }

    public render(){
        return(
            <Suspense fallback={<Loading />}>
                <Switch>
                    <Route path={routePath.home} exact render={()=><Home />} />
                    <Route path={routePath.cv} render={()=> <CV />} />
                </Switch>
            </Suspense>
        )
    }
}

export default Routers;