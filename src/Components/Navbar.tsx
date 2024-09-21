
import { Link } from 'react-router-dom';

interface NavLink {
  name: string;
  path: string;
}

const links: NavLink[] = [
  { name: 'new', path: '/new' },
  { name: 'past', path: '/past' },
  { name: 'comments', path: '/comments' },
  { name: 'ask', path: '/ask' },
  { name: 'show', path: '/show' },
  { name: 'jobs', path: '/jobs' },
  { name: 'submit', path: '/submit' },
];

function Navbar() {
  return (
    <div className="w-full flex  justify-between items-center pb-1 pt-1 md:h-7 bg-[#ff6600] text-black font-verdana text-sm leading-3">
        <img className="h-9 w-auto" src="logo2.png" alt="Logo" />
     <div className="flex flex-wrap">
      <div className="flex items-center">
      
        <Link className="font-black " to="/">Hacker News</Link>
      </div>

      <ul className="flex flex-wrap md:ml-4">
        {links.map((link, index) => (
          <li key={index} className="font-normal flex items-center">
            <Link to={link.path} className="block">
              {link.name}
            </Link>
            {index !== links.length - 1 && <span className="mx-2">|</span>}
          </li>
        ))}
      </ul>
      </div>
      <div className="ml-auto">
        <Link className="pr-2" to="/login">login</Link>
      </div>
      
    </div>
  );
}

export default Navbar;
