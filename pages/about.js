import Layout from '../components/layout';

const About = ({ title, description, ...props }) => {
  return (
    <>
      <Layout pageTitle={`${title} | About`} description={description}>
        <h1>About Tab and Space</h1>

        <p className="description">{description}</p>

        <p>
          I am building this wonderful blog to share my knowledge with you all.
          I am pretty excited!
        </p>
      </Layout>
    </>
  );
};

export default About;

export async function getStaticProps() {
  const configData = await import(`../siteconfig.json`);

  return {
      props: {
          title: configData.default.title,
          description: configData.default.description
      }
  }
}
