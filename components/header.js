import Link from 'next/link';

const Header = () => {
  return (
    <>
      <header className="header bg-gray-900 text-white py-4 px-4 sticky top-0">
        <nav className="nav flex justify-between">
          <div>
          <Link href="/">
              <a>Tab & Space</a>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <a>About</a>
            </Link>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
