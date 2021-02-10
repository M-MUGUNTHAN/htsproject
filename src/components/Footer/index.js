import React from 'react'
import Facebook from '../../assets/Icons/Facebook'
import Pintrest from '../../assets/Icons/Pintrest'
import Twitter from '../../assets/Icons/Twitter'
import styles from "./footer.module.css";
export default function Footer(props) {
    return (
        <div className={styles.container}>
          <div className={styles.wrapper1}>
              <div className={`${styles.flex1}`}>
                  <div className={`${styles.content1}`}>Get more out of your membership</div>
                  <div className={`${styles.content2}`}>Subscribe to save with daily shocking values, club updates and more!</div>
              </div>
              <div className={`${styles.flex2}`}>
                  <div  className={styles.wrapper1column}>
                        <div className={styles.content3}>
                            Subscribe to our Newsletter
                        </div>
                        <div className={styles.inputcontainer}>
                            <input placeholder="email address"/>
                            <div className={`${styles.content3} ${styles.subscribebutton}`}>Subscribe</div>
                        </div>
                  </div>
              </div>
          </div>  

          <div className={styles.wrapper2}>
              <div  className={`${styles.content3} ${styles.resource}`}>
                  <div>Membership</div>
                  <div>{"Shipping & Delivery"}</div>
                  <div>Help</div>
                  <div>Resources</div>
              </div>
              <div  style={{flex:1,display:"flex",alignItems:"flex-end",justifyContent:"flex-end"}}>
                  <div>
                        <div className={`${styles.wrapper2row1} ${styles.content4}`} >
                            <div>Site Directory</div>
                            <div>Privacy Policy</div>
                            <div>Terms and Conditions</div>
                            <div>About Our Ads</div>
                            <div className={styles.socialcontent}>
                                <div><Facebook/></div>
                                <div><Twitter/></div>
                                <div><Pintrest/></div>
                            </div>
                        </div>
                        <div className={`${styles.copyright} ${styles.content4}`}>© 2000-2015, ABC, Inc. All rights reserved</div>
                  </div>
              </div>
          </div>
        </div>
    )
}
