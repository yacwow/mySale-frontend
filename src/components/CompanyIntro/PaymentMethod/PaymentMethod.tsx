import React from 'react';
import styles from './PaymentMethod.less'

const App: React.FC = () => {
    return (
        <section className={styles.container}>
            <h6><strong>１．クレジットカード払い</strong></h6>

            <p>以下のクレジットカードがご利用いただけます。</p>

            <p><img src="https://www.sweeshop.com/storage/app/media/uploaded-files/cards66.png" data-result="success" /></p>

            <p>
                <br/><strong>２.コンビニ・銀行払い</strong>
                    <br/>以下のコンビニエンスストアと銀行でのお支払いが可能です。</p>

                    <p><strong>３.銀行振込 &nbsp;</strong>
                        <br/>※当サイトは全て前払いとなっております。
                            <br/>※現在、代引きは対応できません。ご理解の程よろしくお願いします。
                                <br/>※弊社は越境ECを経営しているため、クレジットカード決済の場合、為替レートが発生いたします。通常は3％～5％になります。予めご了承ください。</p>
                            </section>
                            )
};
                            export default App;