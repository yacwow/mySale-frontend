import React from 'react';
import styles from './HeaderOfEachComp.less'
interface Props {
    imgSrc: string,
    title: string,
    surFix?: JSX.Element,
}
const App: React.FC<Props> = (props) => {
    const { imgSrc, title, surFix=null } = props
    return (
        <div className={styles.container}>
            <img src={imgSrc} />
            <div className={styles.rightPart}>
                <h3 className={styles.title}>{title}</h3> 
                {surFix}
            </div>
        </div>
    )
};
export default App;