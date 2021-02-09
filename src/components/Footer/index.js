import React from 'react'
import Facebook from '../../assets/Icons/Facebook'
import Pintrest from '../../assets/Icons/Pintrest'
import Twitter from '../../assets/Icons/Twitter'

export default function Footer(props) {
    return (
        <div>
          <div>
              <div>
                  <div>Get more out of your membership</div>
                  <div>Subscribe to save with daily shocking values, club updates and more!</div>
              </div>
              <div>
                  <div>Subscribe to our Newsletter</div>
                  <div>
                      <input placeholder="email address"/>
                      <div>Subscribe</div>
                  </div>
              </div>
          </div>  

          <div>
              <div>
                  <div>Membership</div>
                  <div>{"Shipping & Delivery"}</div>
                  <div>Help</div>
                  <div>Resources</div>
              </div>
              <div>
                  <div>
                      <div>Site Directory</div>
                      <div>Privacy Policy</div>
                      <div>Terms and Conditions</div>
                      <div>About Our Ads</div>
                      <div><Facebook/></div>
                      <div><Twitter/></div>
                      <div><Pintrest/></div>
                  </div>
                  <div>© 2000-2015, ABC, Inc. All rights reserved</div>
              </div>
          </div>
        </div>
    )
}
