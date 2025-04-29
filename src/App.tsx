import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/sections/Hero';
import AboutUs from './components/sections/AboutUs';
import NewsletterForm from './components/sections/NewsletterForm';


function App() {
  return (
    <Layout>
      <Hero />
      <AboutUs />
      <NewsletterForm />
    </Layout>
  );
}

export default App;