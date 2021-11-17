import PropTypes from "prop-types";
import React, { useState } from "react";

import { connect } from "react-redux";
import { Form, Container } from "reactstrap";

import { Link } from "react-router-dom";


import logo from "../../assets/images/logo.JPG";


const Header = (props) => {
  const [search, setsearch] = useState(false);
  const [megaMenu, setmegaMenu] = useState(false);

 
  return (
    <>
      <header id="page-topbar">
        <div className="navbar-header">
          <Container fluid>
            <div className="float-end">
              {/* <NotificationDropdown /> <ProfileMenu />{" "} */}
            </div>
            <div>
              <div className="navbar-brand-box">
                <Link to="/" className="logo">
                  <span className="logo-lg">
                    <img src={logo} alt="" height="50" />
                  </span>
                </Link>
              </div>
              <Form className="app-search d-none d-lg-inline-block">
                <div className="position-relative">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Search..."
                  />
                  <span className="bx bx-search-alt"></span>
                </div>
              </Form>
            </div>
          </Container>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  changeSidebarType: PropTypes.func,
  leftMenu: PropTypes.any,
  leftSideBarType: PropTypes.any,
  showRightSidebar: PropTypes.any,
  showRightSidebarAction: PropTypes.func,
  t: PropTypes.any,
  toggleLeftmenu: PropTypes.func,
};

const mapStatetoProps = (state) => {
  const { layoutType, showRightSidebar, leftMenu, leftSideBarType } =
    state.Layout;
  return { layoutType, showRightSidebar, leftMenu, leftSideBarType };
};

export default connect(mapStatetoProps, {

})(Header);
