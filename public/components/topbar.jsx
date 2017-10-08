var TopBar = props =>
  <nav className="outer-top-bar navbar">
    <div className="container-fluid nav-top-first top-bar-container">
      <ul className="nav navbar-nav nav-top top-bar-item-container">
        <li>
          <a href="#">Dealers and Distributors</a>
        </li>
        <li>
          <a href="#">
            Commercial Service<span className="glyphicon glyphicon-share" />
          </a>
        </li>
      </ul>
    </div>
  </nav>;

window.TopBar = TopBar;
