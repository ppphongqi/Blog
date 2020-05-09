import * as React from 'react';
import Title from '../../components/common/Title/Title';
import PostSummary from '../../components/common/PostSummary/PostSummary';

import styles from './Home.module.scss';
import svgIcons from '../../assets/images/pty-blog-svg-icons.svg';
import {svgSprite} from '../../constants/constants'

import _classnames from 'classnames';

// import { inject, observer } from 'mobx-react';
// import {HomeStore} from'../../types/home';

// @inject('homeStore')
// @observer
class Home extends React.Component<{},{}>{
    constructor(props:any){
        super(props);
        this.state = {
          projects : [
            {
              introduction: 'Viewport简介',
              poster:"//yancey-assets.oss-cn-beijing.aliyuncs.com/JavaScript-logo-1_nptyzu-740x417.png?x-oss-process=image/format,webp",
              title:"什么是viewport？作用？",
              upload_date:"2019年11月17日",
              url:"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/viewport.md",
              _id:"01"
          },
          {
              introduction: "UI调试技巧",
              poster:"//yancey-assets.oss-cn-beijing.aliyuncs.com/917824-weather-wallpaper.jpg?x-oss-process=image/format,webp",
              title:"CSS小技巧-> UI调试",
              upload_date:"2019年11月17日",
              url:"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/UI%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7.txt",
              _id:"02",
  
          },
          {
              introduction: "工具库classnames",
              poster:"//yancey-assets.oss-cn-beijing.aliyuncs.com/https___blueprint-api-production.s3.amazonaws.com_uploads_card_image_847067_995c27df-12fb-4cba-b2bc-59235461a038.jpg?x-oss-process=image/format,webp",
              title:"classnames动态类名简化",
              upload_date:"2019年11月17日",
              url:"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/%E5%B7%A5%E5%85%B7%E5%BA%93classnames--%E3%80%8B%E5%8A%A8%E6%80%81%E7%B1%BB%E5%90%8D%E7%AE%80%E5%8C%96.md",
              _id:"02",
          }
          ]
        } ;
    }

    public render(){
        return (
            <main className={styles.pty_blog_home}>
              <Title title="Pty Official Blog"></Title>
              <div className={styles.ad_wrapper}/>

              <div className={styles.home_slogon}> 
                  <div className={_classnames(styles.glitch,'no-user-select')} data-value="HI！ (ง•o•)ง">
                  HI！ (ง•o•)ง
                  </div>

                  <div className={styles.social_media_container}>
                      <div className={styles.up_triangle}/>
                      <p className={_classnames(styles.social_media_motto, 'no-user-select')}>
                      <svg className={_classnames(styles.icon, styles.left_quote)}>
                        <use xlinkHref={`${svgIcons}${svgSprite.leftQuote}`} />
                      </svg>
                      <span className={styles.motto_content}>每天起床第一句，先给自己打个气！</span>
                      <svg className={_classnames(styles.icon, styles.right_quote)}>
                        <use xlinkHref={`${svgIcons}${svgSprite.rightQuote}`} />
                      </svg>
                      </p>
                  </div>
              </div>

              <section className={styles.content}>
                <article className={styles.announcement_wrapper}>
                  <svg className={styles.icon}>
                    <use xlinkHref={`${svgIcons}${svgSprite.megaphone}`} />
                  </svg>
                  <span>学习使我快乐✪ ω ✪,pty的博客啥时候能上线啊</span>
                </article>


                <article className={styles.new_release_wrapper}>
                  <h2 className={styles.new_release_tips}>
                    <svg className={styles.icon}>
                    <use xlinkHref={`${svgIcons}${svgSprite.fire}`} />
                    </svg>
                    每日必学
                  </h2>
                  <div className={styles.new_release_container}>
                    <div className={styles.new_release} key={"01"}>
                      <a href={"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/viewport.md"} target='_blank' rel='noopener noreferrer'>
                      <figure
                        className={styles.new_release_content}
                        style={{
                          backgroundImage: `url(//yancey-assets.oss-cn-beijing.aliyuncs.com/JavaScript-logo-1_nptyzu-740x417.png?x-oss-process=image/format,webp)`,
                        }}
                        data-title={'什么是viewport？作用？'}
                        data-intro={'Viewport简介'}
                        >
                        <div className={styles.overlay} />
                      </figure>
                      </a>
                    </div>
                    <div className={styles.new_release} key={"02"}>
                      <a href={"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/UI%E8%B0%83%E8%AF%95%E6%8A%80%E5%B7%A7.txt"} target='_blank' rel='noopener noreferrer'>
                      <figure
                        className={styles.new_release_content}
                        style={{
                          backgroundImage: `url(//yancey-assets.oss-cn-beijing.aliyuncs.com/917824-weather-wallpaper.jpg?x-oss-process=image/format,webp)`,
                        }}
                        data-title={"CSS小技巧-> UI调试"}
                        data-intro={"UI调试技巧"}
                        >
                      <div className={styles.overlay} />
                      </figure>

                      </a>
                    </div>
                    <div className={styles.new_release} key={"03"}>
                      <a href={"https://github.com/ppphongqi/Skills-and-knowledge/blob/master/%E5%B7%A5%E5%85%B7%E5%BA%93classnames--%E3%80%8B%E5%8A%A8%E6%80%81%E7%B1%BB%E5%90%8D%E7%AE%80%E5%8C%96.md"} target='_blank' rel='noopener noreferrer'>
                      <figure
                        className={styles.new_release_content}
                        style={{
                          backgroundImage: `url(//yancey-assets.oss-cn-beijing.aliyuncs.com/https___blueprint-api-production.s3.amazonaws.com_uploads_card_image_847067_995c27df-12fb-4cba-b2bc-59235461a038.jpg?x-oss-process=image/format,webp)`,
                        }}
                        data-title={"classnames动态类名简化"}
                        data-intro={'工具库classnames'}
                        >
                      <div className={styles.overlay} />
                      </figure>

                      </a>
                    </div>
                  </div>


                </article>
                <article className={styles.blog_summary_wrapper}>
                  <h2 className={styles.blog_summary_tips}>
                    <svg className={styles.icon}>
                      <use xlinkHref={`${svgIcons}${svgSprite.new}`} />
                    </svg>
                      最近动态!
                  </h2>

                  <PostSummary />
                </article>



              </section>




   



            </main>
        )
    }
}

export default Home;