var Nav = props =>
  <nav className="navbar outer-nav-bar">
    <div className="inner-nav-container">
      <div className="navbar-header logo-container">
        {/*<button type="button" className="navbar-toggle">
          <span className="glyphicon glyphicon-menu-hamburger" />
        </button>*/}
        <a href="#">
          <img alt="logo" className="nav-logo" src="public/img/logo.png" />
        </a>
      </div>
      <div className="navbar-list">
        <ul className="nav navbar-nav navbar-list-items">
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
          <li className="navbar-list">
            <div href="#" className="button find-pool-pro">
              <span className="glyphicon glyphicon-map-marker" />Find A Pool Pro
            </div>
          </li>
        </ul>
      </div>
      <div className="find-pro-min-container">
        <div className="button find-pro-min">
          <span className="glyphicon glyphicon-map-marker" />
          Find A Pro
        </div>
      </div>
      <div className="menu-expand">
        <div className="menu-button-line" />
        <div className="menu-button-line" />
        <div className="menu-button-line" />
      </div>
    </div>
  </nav>;

window.Nav = Nav;
