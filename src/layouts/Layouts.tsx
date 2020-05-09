import React , {Component} from 'react';
import { observer, inject } from 'mobx-react';
import '@assets/styles/global.scss';
import _classnames from 'classnames';
import {Router} from 'react-router-dom';

import history from '../history';
import { devToolsWarning } from '../tools/tools'

import AutoBackToTop from '../components/common/AutoBackToTop/AutoBackToTop';
import Header from '../components/common/Header/Header';
import Footer from '../components/common/Footer/Footer'
import Routers from '../Routers';
import ScrollToTop from '../components/Widget/ScrollToTop/ScrollToTop';
// import layoutStore from '../stores/layoutsStore';
// import Loading from '../components/common/Loading/Loading';

// import { LayoutProps } from '../types/layouts';

// import stores from '../stores/index';

interface ILayoutsProps{
    layoutStore?:LayoutsStoreType
    
}
interface IGlobalStatus{
    full_site_gray :boolean
}
interface LayoutsStoreType{
    sayHello:() => void
    status: IGlobalStatus;

}



@inject('layoutStore')
@observer
class Layouts extends Component<ILayoutsProps,{}> {


    constructor(props : any ) {
        super( props);
        this.state={};
    }

    public componentDidMount(){
        devToolsWarning();
        const { layoutStore } = this.props;
        layoutStore!.sayHello();
    }

    public render() {
        const {layoutStore} = this.props;
        const isGray = layoutStore!.status.full_site_gray ; 
        return (
            <div className={_classnames(
                isGray ? 'full_site_gray' : '', 'content' )}
            >
            <Router history={history}> 
                <AutoBackToTop>
                    
                        <Header />
                        <Routers />
                        <Footer />
                    
                    <ScrollToTop />
                </AutoBackToTop>
            </Router>
        </div>
        )
    }
}

export default Layouts ; 