var TopBar = props =>
  <nav className="outer-top-bar">
    <div className="x1-container">
      <ul className="footer-list">
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
