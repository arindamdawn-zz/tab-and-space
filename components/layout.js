import Header from './header';
import Footer from './footer';

const Layout = ({ children, pageTitle, showProgress }) => {
  return (
    <>
      <Header showProgress={showProgress} />
      <main className="container bg-gray-900 max-w-full pb-8 break-words">
        <div className="min-h-screen mx-auto py-6 px-2 max-w-sm md:max-w-2xl">
          {children}
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Layout;
