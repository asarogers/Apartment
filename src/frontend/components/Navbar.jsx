import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="navbar">
        <div className="home">
          <Link to="/">Home</Link>
        </div>
      </header>
    </>
  );
}
