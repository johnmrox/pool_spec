var Nav = props =>
  <nav className="navbar outer-nav-bar">
    <div className="inner-nav-container">
      <div className="navbar-header logo-container">
        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
          <span className="glyphicon glyphicon-menu-hamburger" />
        </button>
        <a href="#">
          <img alt="logo" className="nav-logo" src="public/img/logo.png" />
        </a>
      </div>
      <div className="collapse navbar-collapse navbar-list" id="myNavbar">
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
            <a href="#" className="button find-pool-pro">
              Find A Pool Pro<span className="glyphicon glyphicon-map-marker" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>;

window.Nav = Nav;
