var Nav = props =>
  <nav className="navbar outer-nav-bar">
    <div className="inner-nav-container">
      <div className={`nav-button-container ${props.showMenu}`}>
        <div className="navbar-header top-nav-item">
          {/*<button type="button" className="navbar-toggle">
          <span className="glyphicon glyphicon-menu-hamburger" />
        </button>*/}
          <a href="#">
            <img alt="logo" className="nav-logo" src="public/img/logo.png" />
          </a>
        </div>
        <div className="find-pro-min-container top-nav-item">
          <div className="button find-pro-min">
            <span className="glyphicon glyphicon-map-marker" />
            Find A Pro
          </div>
        </div>
        <div className="menu-expand top-nav-item" onClick={props.toggleMenu}>
          <div className="menu-button-line" />
          <div className="menu-button-line" />
          <div className="menu-button-line" />
        </div>
      </div>
      <div className={`navbar-list ${props.hideMenu}`}>
        <ul className="nav navbar-nav navbar-list-items">
          <li className="li-flex">
            <a href="#">Menu</a>
            <span className="glyphicon glyphicon-chevron-right teal" />
          </li>
          <li className="li-flex">
            <a href="#">Pools & Spas</a>
            <span className="glyphicon glyphicon-chevron-right teal" />
          </li>
          <li className="li-flex">
            <a href="#">Supplies</a>
            <span className="glyphicon glyphicon-chevron-right teal" />
          </li>
          <li className="li-flex">
            <a href="#">Resources</a>
            <span className="glyphicon glyphicon-chevron-right teal" />
          </li>
          <li className="li-flex">
            <a href="#">Services</a>
            <span className="glyphicon glyphicon-chevron-right teal" />
          </li>
          <li>
            <div href="#" className="button find-pool-pro">
              <span className="glyphicon glyphicon-map-marker" />Find A Pool Pro
            </div>
          </li>
        </ul>
      </div>
    </div>
  </nav>;

window.Nav = Nav;
