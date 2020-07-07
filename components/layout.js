import Header from './header';
import Footer from './footer';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Header />
      <main className="container bg-gray-800 max-w-full pb-8">
        <div className="min-h-screen mx-auto pt-10 max-w-sm md:max-w-2xl">
          {children}
        </div>
      </main>

      <Footer>Built with love using next js</Footer>
    </>
  );
};

export default Layout;
