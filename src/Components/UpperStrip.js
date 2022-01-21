import React from 'react';
import Appstore from '../assets/images/appstore.png';
import Playstore from '../assets/images/playstore.png';
import { Link } from 'react-router-dom';
export default function UpperStrip() {
  return (
    <div className="upper-strip">
      <ul className="for-desktop">
        <li>1 REGO = 2 BTC</li>
        <li>1 REGO = 2 INR</li>
        <li>1 REGO = 2 ETH</li>
        <li>1 REGO = 2 BNB</li>
        {/* <li>1 REGO = <%=token_values.usdValue%> GBP</li> */}

        <li>
          <Link to="/comingsoon" target="_blank">
            <img src={Appstore} alt="appstore" />
          </Link>
        </li>
        <li>
          <Link to="/comingsoon" target="_blank">
            <img src={Playstore} alt="playstore" />
          </Link>
        </li>
      </ul>
      <ul className="for-mobile" style={{ display: 'none' }}>
        <li>1 REGO = 2 BTC</li>
        <li>1 REGO = 2 USD</li>
        <li>1 REGO = 2 ETH</li>
        <li>1 REGO = 2 BNB</li>
        {/* <li>1 REGO = <%=token_values.usdValue%> GBP</li>  */}

        <li>
          <Link to="/comingsoon" target="_blank">
            <img src={Appstore} alt="appstore" />
          </Link>
        </li>
        <li>
          <Link to="/comingsoon" target="_blank">
            <img src={Playstore} alt="playstore" />
          </Link>
        </li>
      </ul>
    </div>
  );
}
