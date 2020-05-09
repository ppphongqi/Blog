import * as React from 'react';
import { observer , inject} from 'mobx-react';
import { Iuser } from '../../types/cv'
import classnames from 'classnames';

import styles from "./CV.module.scss";
interface ICVProps{
    cvStore?:CVStoreType;
}
interface CVStoreType{
    user:Iuser
}


@inject('cvStore')
@observer
class CV extends React.Component<ICVProps,{}>{
    constructor(props: {}){
        super(props);
        this.state={};
    }
    public componentWillMount(){
        
    }
    public render(){
        const {cvStore} = this.props;
        return (
            <main className={styles.cv_wrapper}>
                <section className={styles.cv_basic_container}>
                    <figure
                        className={styles.avatar}
                        style={{
                            backgroundImage:`url(${cvStore!.user.avatar})`
                        }}
                    />
                    <div className={styles.cv_basic}>
                        <p className={classnames(styles.identity, styles.name)}>
                            {cvStore!.user.user_name}
                        </p>
                        <p className={styles.identity}>
                            <span>Gender:</span> Man
                        </p>
                        <p className={styles.identity}>
                            <span>City:</span>
                            {cvStore!.user.city}
                        </p>
                        <p className={styles.identity}>
                            <span>Age:</span>
                            {new Date().getFullYear() - 1998}
                        </p>
                        <p className={styles.identity}>
                            <span>Position:</span>
                            {cvStore!.user.position}
                        </p>
                        <p className={classnames(styles.identity, styles.media)}>
                            <span>GitHub: </span>
                            ppphongqi
                        </p>
                        <p className={classnames(styles.identity, styles.media)}>
                            <span>Email: </span>
                            2503389490@qq.com
                        </p>
                        <div className={styles.self_introduction}>
                            <p className={styles.self_introduction_content}>
                            {cvStore!.user.self_introduction}
                        </p>
            </div>
                    </div>

                </section>

            </main>
        )
    }

}

export default CV;