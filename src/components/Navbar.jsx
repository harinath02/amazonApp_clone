import React from "react";
import "./../../public/styles.css";
// import logo_a from './images/logoa.png';
// import logo_b from './images/cart.png';
// import logo_c from './images/india.png';
// import logo_f from './images/search.png';
function NavBar() {
  return (
    <nav className="d-flex none">
      <div className="nav_brand">
        <a href="https://www.amazon.in/ref=nav_logo">
          <img src="./Images/logoa.png" alt="k" />
        </a>
      </div>
      <div className="search d-flex">
        <input type="text" className="box" />
        <img src="./Images/search.png" className="search" alt="." />
      </div>
      <ul className="nav_menu d-flex">
        <a href="https://www.amazon.in/customer-preferences/edit?ie=UTF8&preferencesReturnUrl=%2Fref%3Dnav_logo&ref_=topnav_lang">
          <img src="./Images/india.png" alt="." />
        </a>
        <li>
          <a href="amazon.in/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fcustomer-preferences%2Fedit%3Fie%3DUTF8%26preferencesReturnUrl%3D%252Fref%253Dnav_logo%26ref_%3Dnav_ya_signin&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=inflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&">
            Hello Guest <br />
            <span>Sign In</span>
          </a>
        </li>
        <li>
          <a href="https://www.amazon.in/ap/signin?_encoding=UTF8&accountStatusPolicy=P1&openid.assoc_handle=inamazon&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.mode=checkid_setup&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&openid.ns.pape=http%3A%2F%2Fspecs.openid.net%2Fextensions%2Fpape%2F1.0&openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.in%2Fgp%2Fcss%2Forder-history%3Fie%3DUTF8%26ref_%3Dnav_orders_first&pageId=webcs-yourorder&showRmrMe=1">
            Return <br />
            <span>Orders</span>
          </a>
        </li>
        <li>
          <a href="https://www.amazon.in/amazonprime?ref_=nav_cs_primelink_nonmember">
            Your <br />
            <span>Prime</span>
          </a>
        </li>
        <li>
          <div>
            <a href="https://www.amazon.in/gp/cart/view.html?ref_=nav_cart">
              {/* <i className="fas fa-shopping-cart"></i> <span className="crt">0</span> */}
              <img
                className="fas fa-shopping-cart"
                src="./Images/cart.png"
                alt=".."
              ></img>
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
