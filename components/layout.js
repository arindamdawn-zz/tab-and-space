import Header from './header';
import Footer from './footer';

const Layout = ({ children }) => {
  return (
    <>
      <section className="layout">
        <Header />
        <div className="content min-h-screen my-4 mx-4 max-w-xl mx-auto">{children}</div>
      </section>
      <Footer>Built with love using next js</Footer>
    </>
  );
};

export default Layout;
