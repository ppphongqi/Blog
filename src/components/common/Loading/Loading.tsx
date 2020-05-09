import * as React from 'react';
import styles from './Loading.module.scss';

class Loading extends React.Component<{},{}>{
    constructor(props : any) {
        super(props) ;
        this.state ={}
    }

    public render(){
        

        return (
            <figure className={styles.loading} />
        )
    }
}

export default Loading;