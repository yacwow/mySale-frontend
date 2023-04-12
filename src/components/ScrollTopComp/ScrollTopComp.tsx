import React, { useEffect, useState } from 'react';
import styles from './ScrollTopComp.less'
//@ts-ignore
import $ from 'jquery'

const App: React.FC = () => {
    const [visible, setVisible] = useState(false)
    const scrollListener=()=>{
        if ($(window).scrollTop() > 600) {
            // console.log('in', $('#box'))
            // $('#box').css('visibility', 'visible')
            setVisible(true)
        } else {
            // $('#box').css('visibility', 'hidden')
            setVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', () => {
            scrollListener();
        })
        return function(){
            console.log('in return');
            window.removeEventListener('scroll',scrollListener)
        }
    }, [])

    return (
        visible ? <div id="box" className={styles.box}
            onClick={() => { scrollTo(0, 0); }}>
            <div className={styles.boxIn}></div></div> : null

    )
};
export default App;