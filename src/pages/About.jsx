const About = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800">About Us</h1>
        <p className="text-xl text-gray-500 mt-2">
          Learn more about who we are and what we do
        </p>
      </header>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Our Mission
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our mission is to provide exceptional services that empower businesses
          and individuals to reach their fullest potential through innovation
          and excellence.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Story</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          We started with a small team of passionate individuals aiming to
          create meaningful solutions that solve real-world problems. Over the
          years, we&apos; ve grown into a leading provider in the industry,
          helping businesses grow and succeed.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">Our Team</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Our team consists of experienced professionals who are experts in
          their fields. We believe in collaboration, continuous learning, and
          delivering the best results for our clients.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-3xl font-semibold text-gray-700 mb-4">
          Contact Us
        </h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Have any questions or want to know more about us? Feel free to reach
          out to us at
          <a
            href="mailto:contact@yourcompany.com"
            className="text-blue-600 hover:text-blue-800"
          >
            {" "}
            contact@yourcompany.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
