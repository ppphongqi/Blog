import * as React from 'react';
import _classnames from 'classnames';
import styles from './PostSummary.module.scss';

import svgIcons from '../../../assets/images/pty-blog-svg-icons.svg';
import { svgSprite} from '../../../constants/constants';

import 'react-lazy-load-image-component/src/effects/blur.css';

class PostSummary extends React.Component<{},{}>{
    constructor(props:any){
        super(props);
        this.state={
        }
    }
    public render(){
        return (

        <div>
            <article className={_classnames(styles.blog_summary_content)} key={'01'}>
                <div className={styles.blog_thumb_wrapper}>
                    <a href={'https://github.com/ppphongqi/JS-Skills/blob/master/JS%E4%B8%AD%E7%9A%84%E6%B5%85%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B7%B1%E6%8B%B7%E8%B4%9D.md'}>
                        <figure className={styles.blog_thumb}>
                            <div className={styles.img1}>
                            </div>
                        </figure>
                    </a>
                </div>

                <div className={styles.blog_info}>
                <p className={styles.publish_date}>
                  <svg>
                    <use xlinkHref={`${svgIcons}${svgSprite.time}`} />
                  </svg>
                  Released 2019.11.16
                </p>
                <a href={'https://github.com/ppphongqi/JS-Skills/blob/master/JS%E4%B8%AD%E7%9A%84%E6%B5%85%E6%8B%B7%E8%B4%9D%E4%B8%8E%E6%B7%B1%E6%8B%B7%E8%B4%9D.md'}>
                <h3 className={styles.title}>JS中的浅拷贝与深拷贝</h3>
                </a>
                <p className={styles.summary_content}>{
                `
                首先了解深浅拷贝之前来看看JS中的几种数据类型
                ，分别有String、Number、Boolean、undefined
                、null、Object。es6还多了一种symbol,我们暂且
                先把他放一边。前面提到的几种数据类型前五种也就是String
                、Number、Boolean、undefined、null都是属于基本数据类型
                ，而Object则是属于复杂数据类型，比如数组Array，日期date
                ，正则reg等等都是属于Object。
                
                `
                } </p>
                </div>

            </article>

            <article className={_classnames(styles.blog_summary_content)} key={'02'}>
                <div className={styles.blog_thumb_wrapper}>
                    <a href={'https://github.com/ppphongqi/Skills-and-knowledge/blob/master/Vue%E4%B9%8BMVVM%E5%8E%9F%E7%90%86.md'}>
                        <figure className={styles.blog_thumb}>
                            <div className={styles.img2}>
                            </div>
                        </figure>
                    </a>
                </div>
                <div className={styles.blog_info}>
                <p className={styles.publish_date}>
                  <svg>
                    <use xlinkHref={`${svgIcons}${svgSprite.time}`} />
                  </svg>
                  Released 2019.11.16
                </p>
                <a href={'https://github.com/ppphongqi/Skills-and-knowledge/blob/master/Vue%E4%B9%8BMVVM%E5%8E%9F%E7%90%86.md'}>
                <h3 className={styles.title}>Vue之MVVM原理</h3>
                </a>
                <p className={styles.summary_content}>{
                `
                MVVM是Model-View-ViewModel的缩写，
                它是一种基于前端开发的架构模式，
                View和Model之间并没有直接的联系，
                而是通过ViewModel进行交互，其核心
                是ViewModel通过双向数据绑定将View
                和Model连接起来了，这使得View数据的
                变化会同步到Model中，而Model数据的
                变化也会立即反应到View上
                `
                } </p>
                </div>
            </article>
            <article className={_classnames(styles.blog_summary_content)} key={'03'}>
                <div className={styles.blog_thumb_wrapper}>
                    <a href={'https://github.com/ppphongqi/Skills-and-knowledge/blob/master/%E7%BB%93%E5%90%88React%20Hooks%E6%9D%A5%E4%BD%BF%E7%94%A8redux.md'}>
                        <figure className={styles.blog_thumb}>
                            <div className={styles.img3}>
                            </div>
                        </figure>
                    </a>
                </div>
                <div className={styles.blog_info}>
                <p className={styles.publish_date}>
                  <svg>
                    <use xlinkHref={`${svgIcons}${svgSprite.time}`} />
                  </svg>
                  Released 2019.11.16
                </p>
                <a href={'https://github.com/ppphongqi/Skills-and-knowledge/blob/master/%E7%BB%93%E5%90%88React%20Hooks%E6%9D%A5%E4%BD%BF%E7%94%A8redux.md'}>
                <h3 className={styles.title}>结合React Hooks来使用redux</h3>
                </a>
                <p className={styles.summary_content}>{
                `
                React-redux发布了7.1.0版本的hooks。
                这意味着我们可以使用react的最新最佳实践。
                hooks让我们为相同的功能编写更少的代码。
                我们需要编写的代码越少，我们就可以越快地启动应用程序
                `
                } </p>
                </div>
            </article>
        </div>
        )
    }
}

export default PostSummary;