import React from 'react';
import styles from './PickUpPicture.less';
import { NavLink } from '@umijs/max';
//@ts-ignore
import { LazyLoadImage } from "react-lazy-load-image-component";
interface Props {
    href: string,
    imgSrc: string,
    date: any,
    intro: string
}
const App: React.FC<Props> = (props) => {
    const { href, imgSrc, date, intro } = props;
    return (
        <NavLink className={styles.container} to={href}>
            <div style={{ width: 250,height:150 }}>
                <LazyLoadImage className={styles.backImg} src={imgSrc} />
            </div>

            <div className={styles.detail}>
                <span >{date}</span>
                <p>{intro}<span>&nbsp;</span></p>
            </div>
            <div className={styles.link}>&gt;</div>
        </NavLink>
    )
};
export default App;