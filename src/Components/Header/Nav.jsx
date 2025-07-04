import DropDown from "./DropDown";
import { Link } from "react-router-dom";

export default function Nav({ setMobileToggle }) {
  return (
    <ul className="cs_nav_list fw-medium">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li className="menu-item-has-children">
        <Link to="#">Pages</Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/about" onClick={() => setMobileToggle(false)}>
                About Us
              </Link>
            </li>
            <li>
              <Link to="/team" onClick={() => setMobileToggle(false)}>
                Our Team
              </Link>
            </li>
            <li>
              <Link
                to="/team/team-details"
                onClick={() => setMobileToggle(false)}
              >
                Team Details
              </Link>
            </li>
            <li>
              <Link to="/pricing" onClick={() => setMobileToggle(false)}>
                Pricing
              </Link>
            </li>
            <li>
              <Link to="/faq" onClick={() => setMobileToggle(false)}>
                Faq
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMobileToggle(false)}>
                Contact
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li className="menu-item-has-children">
        <Link to="/service" onClick={() => setMobileToggle(false)}>
          Services
        </Link>
        <DropDown>
          <ul>
            <li>
              <Link to="/service" onClick={() => setMobileToggle(false)}>
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/service/service-details"
                onClick={() => setMobileToggle(false)}
              >
                Service Details
              </Link>
            </li>
          </ul>
        </DropDown>
      </li>

      <li>
        <Link to="/products" onClick={() => setMobileToggle(false)}>
          Products
        </Link>
      </li>

      <li>
        <Link to="/contact" onClick={() => setMobileToggle(false)}>
          Contact
        </Link>
      </li>
    </ul>
  );
}
