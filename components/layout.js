import Header from './header';
import Footer from './footer';

const Layout = ({ children, pageTitle }) => {
  return (
    <>
      <Header />
      <main className="content min-h-screen mx-auto pt-10 max-w-xs md:max-w-2xl">
        {children}
      </main>

      <Footer>Built with love using next js</Footer>
    </>
  );
};

export default Layout;
