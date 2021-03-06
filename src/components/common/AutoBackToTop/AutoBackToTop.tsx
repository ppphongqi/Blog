import * as React from 'react' ;
import { withRouter } from 'react-router-dom';

class ScrollToTop extends React.Component<any>{
    public componentDidUpdate( prevProps : any) {
        //路由改变，页面自动回到顶部
        if(this.props.location.pathname !== prevProps.location.pathname){
            window.scrollTo(0,0);
        }
    }
    public render(){
        return  this.props.children
    }
}


export default withRouter(ScrollToTop);