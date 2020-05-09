import * as React from 'react';
import svgIcons from '../../../assets/images/pty-blog-svg-icons.svg'
import styles from './Footer.module.scss';
import { svgSprite } from '../../../constants/constants'



// import { Link } from 'react-router-dom';
// import routePath from '../../../constants/routePath';

class Footer extends React.Component<{},{}>{
    constructor(props:{}){
        super(props);
        this.state={

        };
    }

    public render(){
        return (
            <footer className={styles.common_footer}>
                <div className={styles.footer_container}>
                    <p className={styles.creator}>
                    Thank you for your
                    <svg className={styles.icon_heart}>
                        <use xlinkHref={`${svgIcons}${svgSprite.heart}`}></use>
                    </svg>
                    From Pty
                    </p>
                    <hr className={styles.dot_split} />
                    <section className={styles.copyright_wrapper}>
                        <p className={styles.copyright}>
                            Copyright &copy; {new Date().getFullYear()} Pty. All rights
                            reserved.
                        </p>
                        <ul>
                            {/* {Object.keys(copyright).map(key => (
                            <li className={styles.copyright_item} key={key}>
                                <Link to={copyright[key].url}>{copyright[key].name}</Link>
                            </li>
                            ))}
                            <li className={styles.copyright_item}>
                                <a href={socialMedia.email.url}>Contact</a>
                            </li> */}
                            <li className={styles.copyright_item}>hello</li>
                            <li className={styles.copyright_item}>welcome</li>
                        </ul>
                    </section>
                </div>

            </footer>
        );
    }
}

export default Footer;