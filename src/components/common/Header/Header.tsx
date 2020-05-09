import * as React from 'react';
import _ from 'lodash';
import _classnames from 'classnames';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss'
import { svgSprite } from '../../../constants/constants';
import svgIcons from '../../../assets/images/pty-blog-svg-icons.svg';

import { IArticleProps , IHeaderState} from '../../../types/article'
import routePath from '../../../constants/routePath';



const headerList :any = {
    home :   {icon: svgSprite.home,url:routePath.home},
    blog :   {icon: svgSprite.blog,url:routePath.blog},
    archive: {icon: svgSprite.archive, url:routePath.archive},
    cv   :   {icon: svgSprite.cv, url:routePath.cv},

}
class Header extends React.Component<IArticleProps , IHeaderState>{

    constructor(props : any){
        super(props);
        this.state = {
            isTop : true,
        }
    }
    
    public componentDidMount(){
        this.switchNavbarBackgroundColor();
    }

    public switchNavbarBackgroundColor(){
        const top = document.documentElement.scrollTop || document.body.scrollTop;
        if(!top) {
            this.setState({
                isTop : true
            })
        }
        window.addEventListener(
            'scroll',
            _.throttle(()=> {
                const tops = document.documentElement.scrollTop || document.body.scrollTop ;
                if(!tops) {
                    this.setState({
                        isTop : true ,
                    }) 
                }else{
                    this.setState({
                        isTop : false,
                    })
                }
            } , 150),
        );
    };

    public render(){
        const { isTop } = this.state

        return (
            <header
                className={_classnames(
                    styles.pty_common_header,
                    'no-user-select',
                    isTop ? styles.clear_navbar_bg :''
                )}
            >
            <div className={styles.pty_logo}>
                Pty Official Blog
            </div>
                <nav>
                    <ul>
                        {Object.keys(headerList).map(key => (
                            <li className={styles.pty_nav_item} key={key}>
                            <Link
                                to={
                                    headerList[key].url 
                                }
                            >
                            <div className={styles.wrraper}>
                            
                                <svg
                                    className={
                                        _classnames(styles.header_icon ,styles[`icon_${key}`])}
                                >
                                    <use xlinkHref={`${svgIcons}${headerList[key].icon}`} />
                                </svg>
                                <span className={styles.menu_name}>{key}</span>
                            
                            </div>
                            </Link>
                            </li>
                        ))}
                            <li
                                className={styles.pty_nav_item}
                                onClick={() => {}}
                            >
                                <svg className={_classnames(styles.header_icon, styles.icon_search)}>
                                    <use xlinkHref={`${svgIcons}${svgSprite.search2}`} />
                                </svg>
                            </li>
                    </ul>
                </nav>
            </header>
        )
    }


}

export default Header;