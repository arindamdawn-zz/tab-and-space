import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="header bg-gray-800 text-white h-16 py-4 px-4 sticky top-0 z-10">
        <nav className="nav flex justify-center">
          <div>
          <Link href="/">
              <a className="text-xl font-medium">Tab & Space</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
