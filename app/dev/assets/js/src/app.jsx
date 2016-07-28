import React from 'react';
import Header from './components/Header/Header';
import Article from './components/Article/Article';
import Footer from './components/Footer/Footer';

const App = () => {
  const companyName = 'Company Name';
  return (
    <div>
      <Header name={companyName} />
      <Article />
      <Footer name={companyName} />
    </div>
  );
};

export default App;
