import Link from 'next/link';
import ReadingProgress from './readingProgress';

const Header = ({ showProgress }) => {
  return (
    <>
      <header className="header bg-gray-800 text-white h-16  sticky top-0 z-10">
        <nav className="nav flex justify-center py-4 px-4">
          <div>
            <Link href="/">
              <a className="text-xl font-medium">Tab & Space</a>
            </Link>
          </div>
        </nav>
        {showProgress && (
          <ReadingProgress className="w-full" />
        )}
      </header>
    </>
  );
};

export default Header;
