import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./navbarClient'), { ssr: false });

export default Navbar;