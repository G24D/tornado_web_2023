import { Link } from "react-router-dom";


export default function Root() {
    return (
      <>
        <div id="navbar">
            <ul className="flex gap-x-6 p-10 justify-center">
                <Link to={'/'}>Home</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact</Link>
                <Link to={'/post'}>Post</Link>
            </ul>
        </div>
      </>
    );
  }