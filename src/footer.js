import logo from './images/logo.png'
import "./footer.css"
import { Link } from 'react-router-dom'
export function Footer() {






  return (
    <footer className="foot">
      <div className="cont">
        <div className="ro">
          <div className="foot-col">
          




     
             <img src={logo} />
            <ul>
              <li>
                <Link to="/boilerS">BOILERS SPARES</Link>
              </li>
              <li>
                <Link to="/boiler">BOILERS</Link>
              </li>
              <li>
                <Link to='/grocery'>GROCERY</Link>
              </li>
              <li>
                <Link to ="/hardware">HARDWARE </Link>
              </li>
              <li>
                <Link to="/industrial">INDUSTRIAL </Link>
              </li>
            </ul>
          </div>
          <div className="foot-col">
            <h4>ADDRESS</h4>
            <p>
            passages of Lorem Ipsum available, but the majority have

                                      (+91) 9988880608
                                      (+91) 9888960608
            </p>

          </div>
          <div className="foot-col">
            <h4>Help & Support</h4>
            <ul>
              <li>
                <a href="/help">FAQ</a>
              </li>
              <li>
                <a href="/help">Shipping</a>
              </li>
              <li>
                <a href="/help">returns</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
