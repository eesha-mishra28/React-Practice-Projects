import { Link } from 'react-router-dom';
function Navbar() {
  return(
    <div>
      <Link to="/about">About</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/dashboard">Dashboard</Link>
    </div>
  );
}
export default Navbar;