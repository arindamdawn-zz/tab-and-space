import Link from 'next/link';
import ReadingProgress from './readingProgress';
import TabAndSpaceLogo from '../svgs/tabandspace.svg/';

const Header = ({ showProgress }) => {
  return (
    <>
      <header className="header bg-gray-800 text-white h-16  sticky top-0 z-10">
        <nav className="nav pt-3 px-4">
          <div className="flex justify-center">
            <Link href="/">
              <a className="text-xl font-medium">
                <TabAndSpaceLogo width="70" height="40" />
              </a>
            </Link>
          </div>
        </nav>
        {showProgress && <ReadingProgress className="w-full" />}
      </header>
    </>
  );
};

export default Header;
