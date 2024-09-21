import Search from "./Search"
import { Link } from "react-router-dom";

interface FooterLink {
  name: string;
  path: string;
}

const links: FooterLink[] = [
  { name: 'GuideLines', path: '/guidelines' },
  { name: 'FAQ', path: '/faq' },
  { name: 'Lists', path: '/lists' },
  { name: 'API', path: '/api' },
  { name: 'Security', path: '/security' },
  { name: 'Legal', path: '/legal' },
  { name: 'Apply to YC', path: '/apply' },
  { name: 'Contact', path: '/contact'}
];



function Footer() {
  return (
    <>
    <div className="border-t-3 border-t-[#ff6600]  mt-12   p-3 flex flex-col justify-center items-center"> 
     <ul className="flex flex-wrap md:ml-4 m-2 text-f font-verdana">
        {links.map((link, index) => (
          <li key={index} className="font-normal flex items-center">
            <Link to={link.path} className="block">
              {link.name}
            </Link>
            {index !== links.length - 1 && <span className="mx-2">|</span>}
          </li>
        ))}
      </ul> 
      <Search />
    </div>


</>
   
  );
}

export default Footer;
